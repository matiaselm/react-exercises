import React, { useState, useContext } from 'react';
import { UserContext, UserDispatchContext } from '../contexts/UserContext';
import axios from 'axios';

const Login = () => {
    const userDetails = useContext(UserContext);
    const setUserDetails = useContext(UserDispatchContext);

    let url = 'http://localhost:5000/api/'

    // Local hook, don't want to change the context before authentication/login
    const [user, setUser] = useState({
        uid: '',
        password: ''
    })

    const [currentUser, setCurrentUser] = useState({});

    const handleSubmit = (e) => {
        console.log('Submitting login to db: ' + user.uid + ' , ' + user.password)

        // Send a POST request

        axios({
            method: 'post',
            url: url + 'users/login',
            data: {
                uid: user.uid,
                password: user.password
            }
        }).then((response) => {
            setCurrentUser(response.data)
            console.log('Logged in, token: ' + response.data.token)
            setUserDetails({
                uid: response.data.uid,
                name: response.data.name,
                token: response.data.token,
                isLoggedIn: true
            })
            setUser({
                uid: '',
                password: ''
            })
        }).catch(error => {
            console.log(error.response);
            setUser({
                uid: '',
                password: ''
            })
            return alert('Please input asked credentials, uid and password')
        });

    }

    const handleChange = (event) => {
        const val = event.target.value
        // console.log('handlechange val: ' + val)
        // console.log('target name: ' + event.target.name)
        setUser({
            ...user,
            [event.target.name]: val
        })
    }

    return <>
        <label htmlFor='name'>Username:</label><br />
        <input type='text' name='uid' placeholder='uid' value={user.uid} onChange={handleChange}></input><br />
        <label htmlFor='password'>Password:</label><br />
        <input type='password' name='password' placeholder='password' value={user.password} onChange={handleChange}></input><br />
        <input type='button' value='login' onClick={handleSubmit}></input>
    </>
}

export default Login