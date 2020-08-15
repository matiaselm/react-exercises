import React, { useState, useContext } from 'react';
import { UserContext, UserDispatchContext } from '../contexts/UserContext';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const Login = () => {
    const setUserDetails = useContext(UserDispatchContext);

    let url = 'http://localhost:5000/api/'

    // Local hook, don't want to change the context before authentication/login
    const [user, setUser] = useState({
        uid: '',
        password: ''
    })

    // newUser state hook manages the inputs of register-screen
    const [newUser, setNewUser] = useState({
        uid: '',
        name: '',
        email: '',
        password: '',
        passwordCheck: ''
    })

    // clears both user-hooks
    const clearInputs = () => {
        setUser({
            uid: '',
            password: '',
        });
        setNewUser({
            uid: '',
            name: '',
            email: '',
            password: '',
            passwordCheck: ''
        });
    }

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
            console.log('Logged in, token: ' + response.data.token)
            console.log('Response data admin check: ' + response.data.admin)
            setUserDetails({
                uid: response.data.uid,
                name: response.data.name,
                admin: response.data.admin,
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
        {view ? <Card style={{ width: '35ch' }}>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first" onClick={() => setView(true)}>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#second" onClick={() => setView(false)}>Register</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <InputGroup>

                    <label htmlFor='name'>Username:</label><br />
                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={user.uid} name='uid'
                            placeholder="uid"
                            aria-label="uid"
                            aria-describedby="uid"
                        />
                    </InputGroup>

                    <label htmlFor='password'>Password:</label><br />
                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={user.password} name='password' type='password'
                            placeholder="password"
                            aria-label="password"
                            aria-describedby="password"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Button variant="outline-secondary" value='login' onClick={handleSubmit}>Login</Button>
                    </InputGroup>

                </InputGroup>
            </Card.Body>
        </Card> : <Card style={{ width: '35ch' }}>
                <Card.Header>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link href="#first" onClick={() => setView(true)}>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#second" onClick={() => setView(false)}>Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <label htmlFor='uid'>Username:</label><br />
                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={newUser.uid} name='uid'
                            placeholder="uid"
                            aria-label="uid"
                            aria-describedby="uid"
                        />
                    </InputGroup>

                    <label htmlFor='email'>Email:</label><br />
                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={newUser.email} name='email'
                            placeholder="email"
                            aria-label="email"
                            aria-describedby="email"
                        />
                    </InputGroup>

                    <label htmlFor='name'>Full name:</label><br />
                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={newUser.name} name='name'
                            placeholder="name"
                            aria-label="name"
                            aria-describedby="name"
                        />
                    </InputGroup>

                    <label htmlFor='password'>Password:</label><br />
                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={newUser.password} name='password' type='password'
                            placeholder="password"
                            aria-label="password"
                            aria-describedby="password"
                        />
                    </InputGroup>

                    <label htmlFor='passwordCheck'>Repeat Password:</label><br />
                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={newUser.passwordCheck} name='passwordCheck' type='password'
                            placeholder="password"
                            aria-label="password"
                            aria-describedby="password"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Button variant="outline-secondary" value='login' onClick={handleRegisterSubmit}>Register</Button>
                    </InputGroup>
                </Card.Body>
            </Card>}
    </>
}
export default Login