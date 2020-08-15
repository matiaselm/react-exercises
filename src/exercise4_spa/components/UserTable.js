import React, { useState, useEffect, useContext } from 'react';
import SearchField from './SearchField';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { UserContext } from '../contexts/UserContext';
import { ModifyForm } from './ModifyUser';

/*
- list is given from props. It holds the global variable userList that is supposed to update whenever there are new users added or asked to be shown
- list.map((user)=>...) creates as many HTML-elements as there are user-type objects on the list and shows them on the page as UserInfo-components

*/

const UserTable = () => {

    const currentUser = useContext(UserContext);
    const [list, setList] = useState([])
    const [modifyMenu, setModifyMenu] = useState(false)
    const [userToModify, setUserToModify] = useState({})

    const [value, setValue] = useState({
        uid: '',
        name: '',
        phone: ''
    });

    // To se value to initial state, needed in child element SearchField
    const clearValue = () => {
        setValue({
            uid: '',
            name: '',
            phone: ''
        })
    }

    const handleSubmit = () => {
        // console.log('App.js handlesubmit: ' + value)
        // console.log('Handlesubmit: ' + value.id, value.name, value.phone)
        fetchUsers()
        clearValue()
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

    // Used to modify a specific user
    const fetchUserById = (user) => {
        console.log('Fetching user ' + user.name + ' with id: ' + user._id)
        const searchTerm = 'http://localhost:5000/api/users/' + user._id

        axios.get(searchTerm)
            .then((response) => {
                setUserToModify(response.data.user)
                setModifyMenu(true)
            })
            .catch((e) => {
                console.log('could not find user');
            })
    }

    const fetchUsers = () => {
        let searchTerm = 'http://localhost:5000/api/users'

        console.log('Fetchusers st: ' + searchTerm);
        console.log('FetchUsers value: ' + value.uid)

        if (value.uid.length > 0) {
            searchTerm += `/uid/${value.uid}`
            console.log('Searchterm: ' + searchTerm)
        }

        if (value.phone.length > 0) {
            searchTerm += `/phone/${value.phone}`
            console.log('Searchterm: ' + searchTerm)
        }

        if (value.name.length > 0) {
            searchTerm += `/name/${value.name}`
            console.log('Searchterm: ' + searchTerm)
        }

        axios.get(searchTerm)
            .then((response) => {
                setList(response.data)
            })
            .catch((error) => {
                console.log('Something went wrong fetching users ' + error);
            });
    }

    useEffect(() => fetchUsers(), [modifyMenu])

    // When delete button is pressed
    const handleDelete = (user) => {
        const url = 'http://localhost:5000/api/users/'

        if (window.confirm('Are you sure you want to delete: ' + user.uid)) {
            axios({
                method: 'delete',
                url: url + user._id
            }).then((response) => {
                return console.log('Deleted user: ' + user.uid)
            }).catch(error => {
                return console.log(error.response);
            });
        }
    }

    if (!Array.isArray(list)) {
        setList([list])
    }

    try {
        return (<>
            <SearchField type='user' clearValue={clearValue} handleChange={handleChange} handleSubmit={handleSubmit} uidValue={value.uid} phoneValue={value.phone} nameValue={value.name}></SearchField>
            <Container>
                {modifyMenu && <ModifyForm className='br-3' hide={() => setModifyMenu(false)} user={userToModify}></ModifyForm>}

                <Table>
                    <tbody>
                        <tr><th>Name</th><th>Uid</th><th>Address</th><th>Zip code</th><th>City</th><th>Phone</th><th>Modify</th><th>Delete</th><th>Bills</th></tr>
                        {list.map((user, i) =>
                            <tr key={i}>
                                {user.admin ? <td style={{ color: 'red' }}>{user.name}</td> : <td>{user.name}</td>}
                                <td>{user.uid}</td>
                                <td>{user.address}</td>
                                <td>{user.postalnum}</td>
                                <td>{user.city}</td>
                                <td>{user.phonenum}</td>
                                {currentUser.admin || currentUser.uid === user.uid ? <>
                                    <td><Button variant="outline-secondary" value='modify' onClick={() => fetchUserById(user)}>Modify</Button></td>
                                    <td><Button variant="outline-danger" value='delete' onClick={() => handleDelete(user)}>Delete</Button></td>
                                </> : <>
                                        <td>-</td>
                                        <td>-</td>
                                    </>}

                                {user.bills ? <td><Button variant="outline-secondary" value='bills' onClick={() => console.log('Clicked on bill-button')}>Bills</Button></td> : <td>-</td>}
                            </tr>
                        )
                        }
                    </tbody>
                </Table>
            </Container>
        </>
        )
    } catch (e) {
        return (
            <h1>Error {e} showing the list</h1>
        )
    }
}

export default UserTable