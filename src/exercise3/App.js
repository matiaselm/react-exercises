import React, { useState, useEffect } from 'react';
import { UserTable } from './components/UserTable'
import SearchField from './components/SearchField'

const App = () => {

    const [value, setValue] = useState('')
    const [list, setList] = useState([])

    useEffect(() => fetchUsers(value), [])

    const fetchUsers = (input) => {
        console.log('Search for user: ' + input)
        console.log('Fetch: http://localhost:3003/people/' + input)
        fetch('http://localhost:3003/people/' + input)
            .then(response => response.json())
            .then((responseData) => {
                setList(responseData)
            })
    }

    const handleSubmit = () => {
        // console.log('App.js handlesubmit: ' + value)
        fetchUsers(value)
        setValue('')
    }

    const handleChange = (event) => {
        // console.log('handelchange value: ' + event.target.value)
        setValue(event.target.value)
    }

    return (
        <div className="App">
            <SearchField value={value} handleChange={handleChange} handleSubmit={handleSubmit} ></SearchField>
            <UserTable list={list} className='userTable'></UserTable>
        </div >
    );
}

export default App;
