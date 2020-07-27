import React, { useState, useEffect } from 'react';
import { UserTable } from './components/UserTable'
import SearchField from './components/SearchField'


const App = () => {

    const [value, setValue] = useState({
        id: '',
        name: '',
        phone: ''
    })

    const [list, setList] = useState([])

    useEffect(() => fetchUsers(value), [])

    const fetchUsers = (input) => {

        let searchTerm = 'http://localhost:3003/people'

        if (input.id !== '') {
            searchTerm += '?&id=' + input.id
            console.log('SearchTerm: ' + searchTerm)
        }

        if (input.name !== '') {
            searchTerm += '?&name=' + input.name
            console.log('SearchTerm: ' + searchTerm)
        }

        if (input.phone !== '') {
            searchTerm += '?&phonenum=' + input.phone
            console.log('SearchTerm: ' + searchTerm)
        }

        fetch(searchTerm)
            .then(response => response.json())
            .then((responseData) => {
                setList(responseData)
            })
    }

    const handleSubmit = () => {
        // console.log('App.js handlesubmit: ' + value)

        console.log('Handlesubmit: ' + value.id, value.name, value.phone)

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
        // console.log('handelchange value: ' + event.target.value)
        // setValue(event.target.value)

    }

    return (
        <div className="App">
            <SearchField handleChange={handleChange} handleSubmit={handleSubmit} idValue={value.id} phoneValue={value.phone} nameValue={value.name}></SearchField>
            <UserTable list={list} className='userTable'></UserTable>
        </div >
    );
}

export default App;
