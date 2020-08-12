import React, { useState } from 'react';



const Login = (props) => {
    const admin = {
        name: 'MJ',
        passwd: '1234'
    }

    const [cred, setCreds] = useState({
        name: '',
        passwd: '',
        passwdCheck: ''
    })

    const checkLogin = () => {
        if (cred.name === admin.name && cred.passwd === admin.passwd && cred.passwd === cred.passwdCheck) {
            return alert('Wow the credentials "' + cred.name + ', ' + cred.passwd + '" were correct! You can login')
        }
        else {
            return alert('The credentials were incorrect, you bastard')
        }
    }

    const handleSubmit = () => {
        checkLogin(cred)
        setCreds({
            name: '',
            passwd: '',
            passwdCheck: ''
        })
    }

    const handleChange = (event) => {
        const val = event.target.value
        // console.log('handlechange val: ' + val)
        // console.log('target name: ' + event.target.name)
        setCreds({
            ...cred,
            [event.target.name]: val
        })
    }

    return <>
        <p>Username</p>
        <input type='text' name='name' placeholder='name' value={cred.name} onChange={handleChange}></input>
        <p>Password</p>
        <input type='password' name='passwd' placeholder='passwd' value={cred.passwd} onChange={handleChange}></input>
        <p>Retype password</p>
        <input type='password' name='passwdCheck' placeholder='retype passwd' value={cred.passwdCheck} onChange={handleChange}></input>
        <input type='button' value='login' onClick={handleSubmit}></input>
    </>
}

export default Login