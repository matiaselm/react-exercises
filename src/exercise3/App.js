import React, { useState, useEffect } from 'react';
import { UserTable } from './components/UserTable'

const App = () => {

    return (
        <div className="App">
            <UserTable className='userTable'></UserTable>
        </div >
    );
}

export default App;
