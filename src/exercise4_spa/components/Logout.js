import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Logout = () => {

    const user = useContext(UserContext);

    return (
        <button onClick={console.log('Logout user: ' + user.username)}>Logout</button>
    )
};

export default Logout;