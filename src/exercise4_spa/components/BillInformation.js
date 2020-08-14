import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchField from './SearchField';
import Table from 'react-bootstrap/Table';

/*
    Bill Information is a component that shows selected user's bills in a table

    TODO: BillInformation to fetch all bills in the db on it's own without props
*/

const BillInformation = (props) => {

    const [value, setValue] = useState({
        id: '',
        uid: '',
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
            })
            .catch((error) => {
                console.log('Something went wrong getting users. ' + error);
            });
    }

    useEffect(() => fetchUsers(value), [])

    const handleSubmit = () => {
        // console.log('App.js handlesubmit: ' + value)
        // console.log('Handlesubmit: ' + value.id, value.name, value.phone)

        fetchUsers(value)
        setValue({
            id: '',
            uid: '',
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

    const BillTable = (props) => {
        const user = props.user
        return <div> {user.bills.length > 0 ? <Table>
            <tbody>
                <tr><th>Bill Id</th><th>Sum</th><th>Date</th><th>Topic</th></tr>
                {user.bills.map((bill, i) => <tr key={i}>
                    <td>{bill.id}</td>
                    <td>{bill.sum}</td>
                    <td>{bill.date}</td>
                    <td>{bill.topic}</td>
                    <td><input type='button' value='modify'></input></td>
                    <td><input type='button' value='remove'></input></td></tr>)}
            </tbody>
        </Table> : <h3>Looks like there's no bills here at all</h3>} </div>
    }

    try {
        return <div>
            <SearchField type='bill' handleChange={handleChange} handleSubmit={handleSubmit} idValue={value.id}></SearchField>

            {list.map((user, i) => <>
                <h4 key={i}>{user.name} <input type='button' value='add bills'></input></h4>
                <BillTable id='billTable' user={user}></BillTable>
            </>)}

        </div>
    } catch (e) {
        return <p>Error {e} showing bills information</p>
    }
}

export default BillInformation 