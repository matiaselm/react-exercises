import React, { useState, useEffect } from 'react';

/*
Nippu B (15p)

8. Tee React-sovellus, jossa on syöttökentät: Nimi, Osoite ja Kaupunki sekä tallennuspainike.
    > Kun käyttäjä painaa talletuspainikkeesta, syötetyistä arvoista muodostetaan yhden henkilön tiedot javascriptin objektiarrayhyn.
        > Sen sisältö renderöidään näkyville sivun alaosaan taulukkomaisesti.
        > Hyödynnä tilamuuttujia.
9. Lisää edelliseen toiminto, jossa näytetään taulukon (ja näkyviin renderöityjen) henkilöiden lukumäärä.
    > Jos lukumäärä ylittää 5, taulukon ympärille tulee punaiset reunukset.
10. Lisää edelliseen jokaiselle riville painike Poista, jolla henkilö voidaan poistaa taulukosta.
11. Lisää edelliseen tarkistussääntö, joska muuttaa nimikenttään syötetyn tekstin isoiksi kirjaimiksi.
12. Muuta kaupunkikenttä alasvetovalikoksi, lue sen arvot taulukosta.
13. Lisää edelliseen viestikomponentti, jolla on vakiosisältönä headeri, jossa on jotain tekstiä ja footer, jossa on tekstiä.
    > Tuo sisältö isäkomponentilta vapaana sisältönä childrenin avulla.
14. Muuta edellinen viestikomponentti siten, että lisää sen footeriin OK-painike.
    > Tuo sille callbackina funktio, joka suoritetaan kun viesti halutaan sulkea.
    > Muuta koodia siten, että tehtävän 9 mukaisessa tilanteessa kun henkilölukumäärä ylittää 5, niin näkyville avautuu ko. viestikomponentti.
    > Kun käyttäjä painaa OK-painiketta, viestikomponentti poistuu näkyviltä.
*/

// InputField contains 3 input fields for the user to fill; their name, address and city. After saving their info, it is saved to the array

let userList = [{
    name: 'Matias',
    address: 'meme',
    city: 'janakkala'
}]

const InputField = () => {

    const saveUser = () => {

        const nameField = document.getElementById('name')
        const addressField = document.getElementById('address')
        const cityField = document.getElementById('city')

        //console.log('are the fields null: ' + nameField.value + addressField.value + cityField.value)

        const clearFields = () => {
            nameField.value = ''
            addressField.value = ''
            cityField.value = ''
        }

        //console.log('save user: ' + nameField.value)
        if (nameField.value.length > 0 && addressField.value.length > 0 && cityField.value.length > 0) {

            userList.unshift({
                name: `${nameField.value}`,
                address: `${addressField.value}`,
                city: `${cityField.value}`
            })

            clearFields()
            console.log(`userList: ${userList}`)
        } else {
            alert('Please input text to all of the fields')
        }
    }


    return (
        <>
            <input type="text" id="name" name="name" placeholder="Name" /><br></br>
            <input type="text" id="address" name="address" placeholder="Address" /><br></br>
            <input type="text" id="city" name="city" placeholder="City" /><br></br>
            <input type="submit" value="Save" onClick={saveUser} />
        </>
    )
}

const UserInfo = (props) => {

    console.log(`UserInfo props: ${props}`)

    return (
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.address}</td>
        </tr>
    )
}

const UserMap = (props) => {

    // userlist is given from props. It holds the global variable userList that is supposed to update whenever there are new users added
    // userlist.map((user)=>...) creates as many HTML-elements as there are user-type objects on the list and shows them on the page as UserInfo-components

    return (
        <>
            <table>
                <tbody>
                    <tr><th>Name</th><th>Address</th></tr>
                    {
                        props.userlist.map((user) =>
                            <UserInfo user={user} />
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

const UserTable = () => {

    const [list, setList] = useState(userList)

    console.log(`UserTable list: ${list}`)
    useEffect(() => {
        console.log("useEffect, list: " + list)
        setList(userList)
    })

    // InputField is only the 3 different textFields with a button to save the information on those fields
    // UserMap shows all info on the list assigned to it on the page.

    return (
        <>
            <InputField />
            <UserMap userlist={list} />
        </>
    )
}
export {
    UserTable
}