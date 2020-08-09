import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchField from './SearchField';

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

    const exampleBill = {
        "id": 1,
        "sum": 399,
        "date": "Wed Mar 25 2015 02:00:00 GMT+0200",
        "topic": "rent",
        "paid": "false"
    }

    try {
        return <div>
            <SearchField type='bill' handleChange={handleChange} handleSubmit={handleSubmit} idValue={value.id}></SearchField>
            <table>
                <tbody>
                    <tr><th>Bill Id</th><th>Sum (€)</th><th>Date</th><th>Topic</th><th><button onClick={props.setVisible}>exit</button></th></tr>
                    {list.map((user, i) =>
                        <tr key={i}>
                            <td>{user.bills.id}</td>
                            <td>{user.bills.sum}</td>
                            <td>{user.bills.date}</td>
                            <td>{user.bills.topic}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    } catch (e) {
        return <p>Error {e} showing bills information</p>
    }
}

export default BillInformation 