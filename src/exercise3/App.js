import React, { useState, useEffect } from 'react';
import { UserTable } from './components/UserTable'
import { UserInfo } from './components/UserInfo'

const App = () => {

    return (
        <div className="App">
            <UserTable className='userTable'></UserTable>
        </div >
    );
}

export default App;
