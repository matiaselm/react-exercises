import React, { createContext, useState } from 'react';

const UserContext = createContext({});
const UserDispatchContext = createContext({});

const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({
        uid: '',
        name: '',
        token: '',
        admin: false,
        isLoggedIn: false
    });

    return (
        <UserContext.Provider value={userDetails}>
            <UserDispatchContext.Provider value={setUserDetails}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext, UserDispatchContext };