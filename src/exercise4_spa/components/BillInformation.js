import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchField from './SearchField';
import UserTable from './UserTable';

/*
    Bill Information is a component that shows selected user's bills in a table

    TODO: BillInformation to fetch all bills in the db on it's own without props
    */

const BillInformation = (props) => {

    const [value, setValue] = useState({
        id: '',
        name: '',
        phone: ''
    });



    const [list, setList] = useState([])

    // console.log('Billinformation: ' + user.bills)

    const fetchUsers = (input) => {

        let searchTerm = 'http://localhost:3003/people?'

        if (input.id !== '') {
            searchTerm += '&id=' + input.id
            console.log('SearchTerm: ' + searchTerm)
        }

        axios.get(searchTerm)
            .then((response) => {
                setList(response.data)
            });
    }

    useEffect(() => fetchUsers(value), [])

    const handleSubmit = () => {
        // console.log('App.js handlesubmit: ' + value)
        // console.log('Handlesubmit: ' + value.id, value.name, value.phone)

        fetchUsers(value)
        setValue({
            id: '',
            name: '',
            phone: ''
        })
    }

    const handleChange = (event) => {
        const val = event.target.value
        // console.log('handlechange val: ' + val)
        // console.log('target name: ' + event.target.name)
        setValue({
            ...value,
            [event.target.name]: val
        })
    }

    if (props.user) {
        setValue({
            id: props.user.id,
            name: props.user.name,
            phone: props.user.phone
        })
        return fetchUsers(value)
    }

    const BillTable = (props) => {
        const user = props.user
        return <table>
            <tbody>
                {user.bills.length > 0 ? <>
                    <tr><th>Bill Id</th><th>Sum</th><th>Date</th><th>Topic</th></tr>
                    {user.bills.map((bill, i) => <tr key={i}>
                        <td>{bill.id}</td>
                        <td>{bill.sum}</td>
                        <td>{bill.date}</td>
                        <td>{bill.topic}</td></tr>)}
                </> : <>No bills</>}
            </tbody>
        </table>
    }

    try {
        return <div>
            <SearchField type='bill' handleChange={handleChange} handleSubmit={handleSubmit} idValue={value.id}></SearchField>
            <table>
                <tbody>
                    {list.map((user, i) => <>
                        <tr>{user.name}</tr>
                        <BillTable user={user}></BillTable>
                    </>)}
                </tbody>
            </table>
        </div>
    } catch (e) {
        return <p>Error {e} showing bills information</p>
    }
}

export default BillInformation 