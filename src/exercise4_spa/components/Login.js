import React, { useState, useContext } from 'react';
import { UserContext, UserDispatchContext } from '../contexts/UserContext';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const userDetails = useContext(UserContext);
    const setUserDetails = useContext(UserDispatchContext);

    let url = 'http://localhost:5000/api/'

    // Local hook, don't want to change the context before authentication/login
    const [user, setUser] = useState({
        uid: '',
        password: ''
    })

    const [newUser, setNewUser] = useState({
        uid: '',
        name: '',
        email: '',
        password: '',
        passwordCheck: ''
    })

    const clearInputs = () => {
        setUser({
            uid: '',
            password: ''
        });
        setNewUser({
            uid: '',
            name: '',
            email: '',
            password: '',
            passwordCheck: ''
        });
    }

    const [currentUser, setCurrentUser] = useState({});
    const [view, setView] = useState(true); //This boolean manages if register window is visible

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
            clearInputs()
        }).catch(error => {
            console.log(error.response);
            clearInputs()
            return alert('Please input asked credentials, uid and password')
        });
    }

    const handleRegisterSubmit = (e) => {

        if (newUser.password === newUser.passwordCheck)
            axios({
                method: 'post',
                url: url + 'users',
                data: {
                    uid: newUser.uid,
                    name: newUser.name,
                    email: newUser.email,
                    password: newUser.password,
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
                clearInputs()
            }).catch(error => {
                console.log(error.response);
                clearInputs()
                return alert('Please input asked credentials and check if your passwords match')
            });
        clearInputs()
        return console.log('Registered');
    }

    const handleChange = (event) => {
        const val = event.target.value
        // console.log('handlechange val: ' + val)
        // console.log('target name: ' + event.target.name)
        if (view) {
            setUser({
                ...user,
                [event.target.name]: val
            });
        } else {
            setNewUser({
                ...newUser,
                [event.target.name]: val
            });
        }
    }

    return <>
        {view ? <div>
            <label htmlFor='name'>Username:</label><br />
            <input type='text' name='uid' placeholder='uid' value={user.uid} onChange={handleChange}></input><br />
            <label htmlFor='password'>Password:</label><br />
            <input type='password' name='password' placeholder='password' value={user.password} onChange={handleChange}></input><br />
            <input type='button' value='login' onClick={handleSubmit}></input>
            <input type='button' value='register' onClick={() => setView(!view)}></input>
        </div> : <div>
                <label htmlFor='name'>Username:</label><br />
                <input type='text' name='uid' placeholder='uid' value={newUser.uid} onChange={handleChange}></input><br />
                <label htmlFor='name'>Email:</label><br />
                <input type='text' name='email' placeholder='email' value={newUser.email} onChange={handleChange}></input><br />
                <label htmlFor='name'>Full name:</label><br />
                <input type='text' name='name' placeholder='name' value={newUser.name} onChange={handleChange}></input><br />
                <label htmlFor='password'>Password:</label><br />
                <input type='password' name='password' placeholder='password' value={newUser.password} onChange={handleChange}></input><br />
                <label htmlFor='password'>Repeat Password:</label><br />
                <input type='password' name='passwordCheck' placeholder='passwordCheck' value={newUser.passwordCheck} onChange={handleChange}></input><br />
                <input type='button' value='submit' onClick={handleRegisterSubmit}></input>
                <input type='button' value='register' onClick={() => setView(!view)}></input>
            </div>}
    </>
}
export default Login