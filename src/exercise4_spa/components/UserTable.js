import React, { useState, useEffect } from 'react';
import BillInformation from './BillInformation';
import SearchField from './SearchField';
import axios from 'axios';

/*
- list is given from props. It holds the global variable userList that is supposed to update whenever there are new users added or asked to be shown
- list.map((user)=>...) creates as many HTML-elements as there are user-type objects on the list and shows them on the page as UserInfo-components
- state constant billState holds 2 variables, the user-object and visibility. 
    - User-object is given to the Bill-Information component. 
    - It's visibility is controlled with the billState.visibility-boolean that is controlled from here and from a callback function
*/

const UserTable = (props) => {

    const [list, setList] = useState([])

    const [value, setValue] = useState({
        id: '',
        name: '',
        phone: ''
    });

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

    const fetchUsers = (input) => {

        let searchTerm = 'http://localhost:3003/people?'

        if (input.id !== '') {
            searchTerm += '&id=' + input.id
            console.log('SearchTerm: ' + searchTerm)
        }

        if (input.name !== '') {
            searchTerm += '&name=' + input.name
            console.log('SearchTerm: ' + searchTerm)
        }

        if (input.phone !== '') {
            searchTerm += '&phonenum=' + input.phone
            console.log('SearchTerm: ' + searchTerm)
        }

        axios.get(searchTerm)
            .then((response) => {
                setList(response.data)
            })
    }

    useEffect(() => fetchUsers(value), [])

    // These 2 for BillInformation visibility on this site, not sure if necessary
    const [billState, setBillState] = useState({
        user: {},
        visibility: false
    })

    const setVisible = () => {
        setBillState({ visibility: false })
    }

    /* translates the data to an array before rendering it, straight from here:
        https://dev.to/cilvako/use-this-trick-to-map-over-single-objects-in-javascript-38nb
    */
    if (!Array.isArray(list)) {
        list = [list]
    }

    const showBillInformation = (currentUser) => {
        setBillState({
            user: currentUser,
        })
        console.log('Showing bill information for user: ' + billState.user);
    }

    const modifyUser = (user) => {
        console.log('Modifying user: ' + user.name);
    }

    const deleteUser = (user) => {
        alert('Are you sure you want to delete user ' + user.name + '?');
        console.log('Deleting user: ' + user.name);
    }

    try {
        return (
            <>
                <SearchField type='user' handleChange={handleChange} handleSubmit={handleSubmit} idValue={value.id} phoneValue={value.phone} nameValue={value.name}></SearchField>
                <table>
                    <tbody >
                        <tr><th>Name</th><th>Address</th><th>Zip code</th><th>City</th><th>Phone</th></tr>
                        {
                            list.map((user, i) =>
                                <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.address}</td>
                                    <td>{user.postalnum}</td>
                                    <td>{user.city}</td>
                                    <td>{user.phonenum}</td>
                                    {user.bills.length > 0 ?
                                        <td><button value='bills' onClick={() => showBillInformation(user)}>Bills</button></td> : <td></td>
                                    }
                                    <td><button value='modify' onClick={() => modifyUser(user)}>Modify</button></td>
                                    <td><button value='delete' onClick={() => deleteUser(user)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {billState.visibility ? <BillInformation setVisible={setVisible} user={billState.user}></BillInformation> : <></>}
            </>
        )
    } catch (e) {
        return (
            <h1>Error {e} showing the list</h1>
        )
    }
}

export default UserTable