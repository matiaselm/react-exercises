import React, { useState } from 'react';

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



const InputField = () => {

    const [userlist, setUserlist] = useState([])

    const saveUser = () => {

        const nameField = document.getElementById('name')
        const addressField = document.getElementById('address')
        const cityField = document.getElementById('city')

        const clearFields = () => {
            nameField.value = ''
            addressField.value = ''
            cityField.value = ''
        }

        if (nameField.value.length > 0 && addressField.value.length > 0 && cityField.value.length > 0) {

            const user = {
                name: `${nameField.value}`,
                address: `${addressField.value}`,
                city: `${cityField.value}`
            }

            clearFields()

            // If we want the table on site to update whenewer a new user is added, we need to use this '.concat()' method
            setUserlist(userlist.concat(user))
        } else {
            alert('Please input text to all of the fields')
        }
    }


    // remove is a function to delete an item from an array in a given index that returns that array without the removed item
    const remove = (array, index) => {
        console.log(`Removing from index ${index}`)

        if (index >= 0) {
            array.splice(index, 1)

            // .concat makes a new array instance instead of copying the old one, so the state array notices the change made and updates the component render
            const newArray = array.concat()
            return newArray
        } else {
            return array
        }
    }

    const UserInfo = (props) => {

        // console.log(`UserInfo props: ${props}`)

        return (
            <tr>
                <td>{props.user.name}</td>
                <td>{props.user.address}</td>
                <td>
                    <button onClick={() => setUserlist(remove(userlist, props.index))}>Delete</button>
                </td>
            </tr>
        )
    }

    const UserMap = (props) => {

        /*
        - userlist is given from props. It holds the global variable userList that is supposed to update whenever there are new users added
        - userlist.map((user)=>...) creates as many HTML-elements as there are user-type objects on the list and shows them on the page as UserInfo-components
        */

        const theTable = (renderStyle) => {
            return (
                <table className={renderStyle}>
                    <tbody className={renderStyle}>
                        <tr className={renderStyle}><th className={renderStyle}>Name</th><th className={renderStyle}>Address</th><th className={renderStyle}>Users: {userlist.length}</th></tr>
                        {
                            props.userlist.map((user, i) =>
                                <UserInfo className={renderStyle} user={user} key={i} index={i} />
                            )
                        }
                    </tbody>
                </table>
            )
        }

        return (
            <>
                {userlist.length < 5 ? theTable('borderless') : theTable('border')}
            </>
        )
    }

    /* 
        - InputField is only the 3 different textFields with a button to save the information on those fields
        - UserMap shows all info on the list assigned to it on the page.
    */

    return (
        <>
            <input type="text" id="name" name="name" placeholder="Name" /><br></br>
            <input type="text" id="address" name="address" placeholder="Address" /><br></br>
            <input type="text" id="city" name="city" placeholder="City" /><br></br>
            <input type="submit" value="Save" onClick={saveUser} />

            <UserMap userlist={userlist} />
        </>
    )
}

export {
    InputField
}