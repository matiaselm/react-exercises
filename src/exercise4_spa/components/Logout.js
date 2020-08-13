import React, { useContext } from 'react';
import { UserContext, UserDispatchContext } from '../contexts/UserContext';

const Logout = () => {

    const user = useContext(UserContext);
    const setUser = useContext(UserDispatchContext);

    const logout = () => {
        setUser({
            username: '',
            admin: false
        });
    };

    return (
        <button onClick={logout}>Logout</button>
    )
};

export default Logout;