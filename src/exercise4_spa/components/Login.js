import React, { useState, useContext } from 'react';
import { UserProvider, UserContext, UserDispatchContext } from '../contexts/UserContext';

const Login = () => {
    const admin = {
        name: 'MJ',
        passwd: '1234'
    }

    const userDetails = useContext(UserContext);
    const setUserDetails = useContext(UserDispatchContext);

    // Local hook, don't want to change the context before authentication/login
    const [userCred, setUserCred] = useState({
        name: '',
        passwd: '',
        passwdCheck: ''
    })

    const checkLogin = () => {
        if (userCred.name === admin.name && userCred.passwd === admin.passwd && userCred.passwd === userCred.passwdCheck) {
            // alert('Wow the credentials "' + userCred.name + ', ' + userCred.passwd + '" were correct! You can login')
            return true
        }
        else {
            alert('The credentials were incorrect, you bastard')
            return false
        }
    }

    const handleSubmit = () => {
        if (checkLogin()) {
            console.log('UserCreds: ' + userCred.name)
            setUserDetails(userCred.name)
            console.log('UserContext: ' + userDetails.name)
            setUserCred({ name: '', passwd: '', passwdCheck: '' })
            return
        } else {
            setUserCred({ name: '', passwd: '', passwdCheck: '' })
            return
        }
    }

    const handleChange = (event) => {
        const val = event.target.value
        // console.log('handlechange val: ' + val)
        // console.log('target name: ' + event.target.name)
        setUserCred({
            ...userCred,
            [event.target.name]: val
        })
    }

    return <>
        <label htmlFor='name'>Username:</label><br />
        <input type='text' name='name' placeholder='name' value={userCred.name} onChange={handleChange}></input><br />
        <label htmlFor='passwd'>Password:</label><br />
        <input type='password' name='passwd' placeholder='passwd' value={userCred.passwd} onChange={handleChange}></input><br />
        <label htmlFor='pawwdCheck'>Retype password:</label><br />
        <input type='password' name='passwdCheck' placeholder='retype passwd' value={userCred.passwdCheck} onChange={handleChange}></input><br />
        <input type='button' value='login' onClick={handleSubmit}></input>
    </>
}

export default Login