import React, { createContext, useState } from 'react';

const UserContext = createContext({});
const UserDispatchContext = createContext({});

const exampleReturn = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJUdW1wcGkiLCJpYXQiOjE1OTc0MDgzODEsImV4cCI6MTU5NzQxMTk4MX0.4wPz7hKCnHkYJaWdLLJILan8-OYnGGNbhJicrpMUVPw",
    "uid": "Tumppi",
    "name": "Tuomas"
}

const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({
        uid: '',
        name: '',
        token: '',
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