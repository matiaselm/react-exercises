import React, { useState, useEffect } from 'react';
import { UserTable } from './components/UserTable'
import SearchField from './components/SearchField'

const App = () => {

    const [searchterm, setSearchterm] = useState('')

    const handleSubmit = (event) => {
        console.log('App.js handlesubmit: ' + event)
        setSearchterm(event.target.value)
    }

    return (
        <div className="App">
            <SearchField handleSubmit={handleSubmit} ></SearchField>
            <UserTable className='userTable' searchterm={searchterm}></UserTable>
        </div >
    );
}

export default App;
