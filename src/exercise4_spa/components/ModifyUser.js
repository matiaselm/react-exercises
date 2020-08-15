import React, { useState } from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const ModifyForm = (props) => {
    const user = props.user

    console.log('User to modify: ' + user.name + ' , ' + user._id)

    const [bill, setBill] = useState(false)
    const [admin, setAdmin] = useState(false)

    const [value, setValue] = useState({
        uid: user.uid,
        name: user.name,
        email: user.email,
        password: '',
        address: user.address,
        postalnum: user.postalnum,
        city: user.city,
        phonenum: user.phonenum
    })

    const handleSubmit = async () => {
        // console.log('App.js handlesubmit: ' + value)
        // console.log('Handlesubmit: ' + value.id, value.name, value.phone)

        // FUNCTION TO PATCH ASKED USER HERE

        const url = 'http://localhost:5000/api/users/'

        const userToSend = {
            'uid': value.uid,
            'name': value.name,
            'email': value.email,
            'password': value.password,
            'address': value.address,
            'postalnum': value.postalnum,
            'city': value.city,
            'phonenum': value.phonenum,
            'bills': bill,
            'admin': admin
        }

        if (value.password === '') {
            alert('Please enter password')
            return
        } else {
            axios({
                method: 'patch',
                url: url + user._id,
                data: userToSend
            }).then((response) => {
                console.log('Modified user: ' + user.uid + ', with response: ' + response.data)
                props.hide()
            }).catch(error => {
                return console.log(error.response);
            });
            return console.log('Registered');
        }
    }

    const handleChange = (event) => {
        const val = event.target.value
        // console.log('handlechange val: ' + val)
        // console.log('target name: ' + event.target.name)
        setValue({
            ...value,
            [event.target.name]: val
        })
    }

    return <>
        <Card style={{ marginBottom: '2ch' }}>
            <Card.Body>
                <InputGroup>
                    <InputGroup className="mb-3">

                        <Col>
                            <label htmlFor="uid">Uid: </label>
                            <InputGroup className="mb-3">
                                <FormControl onChange={handleChange} value={value.uid} name='uid'
                                    placeholder="uid"
                                    aria-label="uid"
                                    aria-describedby="uid"
                                />
                            </InputGroup>

                            <label htmlFor="uid">Name: </label>
                            <InputGroup className="mb-3">
                                <FormControl onChange={handleChange} value={value.name} name='name'
                                    placeholder="name"
                                    aria-label="name"
                                    aria-describedby="name"
                                />
                            </InputGroup>

                            <label htmlFor="uid">Email: </label>
                            <InputGroup className="mb-3">
                                <FormControl onChange={handleChange} value={value.email} name='email'
                                    placeholder="email"
                                    aria-label="email"
                                    aria-describedby="email"
                                />
                            </InputGroup>
                        </Col>

                        <Col>


                            <label htmlFor="uid">Street address: </label>
                            <InputGroup className="mb-3">
                                <FormControl onChange={handleChange} value={value.address} name='address'
                                    placeholder="address"
                                    aria-label="address"
                                    aria-describedby="address"
                                />
                            </InputGroup>

                            <label htmlFor="uid">ZIP-number: </label>
                            <InputGroup className="mb-3">
                                <FormControl onChange={handleChange} value={value.postalnum} name='postalnum'
                                    placeholder="postalnum"
                                    aria-label="postalnum"
                                    aria-describedby="postalnum"
                                />
                            </InputGroup>

                            <label htmlFor="uid">City: </label>
                            <InputGroup className="mb-3">
                                <FormControl onChange={handleChange} value={value.city} name='city'
                                    placeholder="city"
                                    aria-label="city"
                                    aria-describedby="city"
                                />
                            </InputGroup>
                        </Col>

                        <Col>
                            <label htmlFor="uid">Phone number: </label>
                            <InputGroup className="mb-3">
                                <FormControl onChange={handleChange} value={value.phonenum} name='phonenum'
                                    placeholder="phonenum"
                                    aria-label="phonenum"
                                    aria-describedby="phonenum"
                                />
                            </InputGroup>

                            <label htmlFor="uid" >Password: </label>
                            <InputGroup className="mb-3">
                                <FormControl onChange={handleChange} value={value.password} name='password' type='password'
                                    placeholder="password"
                                    aria-label="password"
                                    aria-describedby="password"
                                />
                                <InputGroup.Append>
                                    <Button variant="primary" type='submit' value='submit' onClick={handleSubmit}>Submit</Button>
                                </InputGroup.Append>
                            </InputGroup>

                            <Form.Check onClick={() => setBill(!bill)} label='Bills'></Form.Check>
                            <Form.Check onClick={() => setAdmin(!admin)} label='Admin'></Form.Check>


                        </Col>


                        <Button style={{ height: '5ch' }} variant="outline-danger" type='submit' value='submit' onClick={() => props.hide()}>Exit</Button>

                    </InputGroup>
                </InputGroup>
            </Card.Body>
        </Card>
    </>
}

export { ModifyForm }