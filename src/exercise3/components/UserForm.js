import React, { useState } from 'react';

const UserForm = (props) => {
    const [user, setUser] = useState({
        name: '',
        address: '',
        postalnum: '',
        city: '',
        phone: ''
    })

    const createUser = () => {
        const nameValue = document.getElementById("nameField").value
        const addressValue = document.getElementById("addressField").value
        const postalValue = document.getElementById("postalField").value
        const cityValue = document.getElementById("cityField").value
        const phoneValue = document.getElementById("phoneField").value

        if (nameValue && addressValue && postalValue && cityValue && phoneValue) {
            console.log('Creating user with info: ' + nameValue, addressValue, postalValue, cityValue, phoneValue)

            setUser({
                name: nameValue,
                address: addressValue,
                postalnum: postalValue,
                city: cityValue,
                phone: phoneValue,
            })

            console.log('NEW USER: ' + user)
        } else {
            alert('Please input all asked info before submitting')
        }
    }

    return <form>
        <input id="nameField" type="text" placeholder="Name"></input>
        <input id="addressField" type="text" placeholder="Street Address"></input>
        <input id="postalField" type="number" placeholder="Postal Number"></input>
        <input id="cityField" type="text" placeholder="City"></input>
        <input id="phoneField" type="number" placeholder="Phone"></input>
        <input type="submit" value="Submit" onClick={createUser}></input>
    </form>
}

export { UserForm }