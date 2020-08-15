import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ModifyForm = (props) => {
    const _id = props._id
    const user = props.user
    console.log('User to modify: ' + user.name + ' , ' + user._id)

    const [value, setValue] = useState({
        uid: '',
        name: '',
        email: '',
        password: '',
        address: '',
        address: '',
        postalnum: '',
        city: '',
        phonenum: '',
        bills: '',
        admin: ''
    })

    const handleSubmit = () => {
        // console.log('App.js handlesubmit: ' + value)
        // console.log('Handlesubmit: ' + value.id, value.name, value.phone)

        // FUNCTION TO PATCH ASKED USER HERE

        setValue({
            uid: '',
            name: '',
            email: '',
            password: '',
            address: '',
            address: '',
            postalnum: '',
            city: '',
            phonenum: '',
            bills: '',
            admin: ''
        })
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
        < div >
            <InputGroup>
                <InputGroup className="mb-3">

                    <label htmlFor='name'>Username:</label><br />
                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={value.uid} name='uid'
                            placeholder="uid"
                            aria-label="uid"
                            aria-describedby="uid"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={value.name} name='name'
                            placeholder="name"
                            aria-label="name"
                            aria-describedby="name"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={value.email} name='email'
                            placeholder="email"
                            aria-label="email"
                            aria-describedby="email"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={value.password} name='password' type='password'
                            placeholder="password"
                            aria-label="password"
                            aria-describedby="password"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={value.address} name='address'
                            placeholder="address"
                            aria-label="address"
                            aria-describedby="address"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={value.postalnum} name='postalnum'
                            placeholder="postalnum"
                            aria-label="postalnum"
                            aria-describedby="postalnum"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={value.city} name='city'
                            placeholder="city"
                            aria-label="city"
                            aria-describedby="city"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={value.phonenum} name='phonenum'
                            placeholder="phonenum"
                            aria-label="phonenum"
                            aria-describedby="phonenum"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={value.bills} name='bills'
                            placeholder="bills"
                            aria-label="bills"
                            aria-describedby="bills"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl onChange={handleChange} value={value.admin} name='admin'
                            placeholder="admin"
                            aria-label="admin"
                            aria-describedby="admin"
                        />
                    </InputGroup>

                    <InputGroup.Append>
                        <Button variant="outline-secondary" type='submit' value='submit' onClick={handleSubmit}>Submit</Button>
                    </InputGroup.Append>
                </InputGroup>
            </InputGroup>

        </div>
    </>
}

export { ModifyForm }