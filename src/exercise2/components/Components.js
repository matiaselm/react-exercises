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

----------------------------------------------------------------------------------------------
13. Lisää edelliseen viestikomponentti, jolla on vakiosisältönä headeri, jossa on jotain tekstiä ja footer, jossa on tekstiä.
    > Tuo sisältö isäkomponentilta vapaana sisältönä childrenin avulla.
14. Muuta edellinen viestikomponentti siten, että lisää sen footeriin OK-painike.
    > Tuo sille callbackina funktio, joka suoritetaan kun viesti halutaan sulkea.
    > Muuta koodia siten, että tehtävän 9 mukaisessa tilanteessa kun henkilölukumäärä ylittää 5, niin näkyville avautuu ko. viestikomponentti.
    > Kun käyttäjä painaa OK-painiketta, viestikomponentti poistuu näkyviltä.
*/

const Message = (props) => {

    const [visible, setVisible] = useState(props.visibility)

    const closePopup = () => {
        console.log('Visibility: ' + visible)
        setVisible(!visible)
    }

    return <>
        {visible ? <> <h1>Hey</h1>
            <footer id='footer1'> This is the footer
                <button onClick={() => closePopup()}>OK</button>
            </footer> </> : (
                <></>
            )
        }
    </>
}

const firstLetterToUppercase = (text) => {
    // For those browsers that don't support .trim()
    if (!String.prototype.trim) {
        String.prototype.trim = () => {   // This creates a warning
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    }
    let trimmed = text.trim() // Trimming makes sure there's no whitespaces in the input

    // .toUpperCase() returns the first letter in the string, .slice(1) returns everything else in the string after that
    let textFormatted = trimmed[0].toUpperCase() + trimmed.slice(1)
    return textFormatted
}

const DropDownMenu = (props) => {

    const [title, setTitle] = useState(props.title) // Button reads whatever the user has chosen from the menu using this state hook
    const [visible, setVisible] = useState(false) // Manages the visibility of the dropdown menu

    // When an user clicks on a city from the dropdown
    const select = (selected, index) => {
        setTitle(selected)
        console.log(`Selected '${selected}' at index: ${index}`)
        setVisible(false)
    }

    const menu = (
        <>
            <div className='dropdown'>
                <button id='dropbtn' value={title} onClick={() => setVisible(!visible)}>{title}</button>
                <div id='citiesDropdown' className='dropdown-content'>
                    {visible ? props.list.map((cityname, index) =>
                        <button className='listbtn' key={index} onClick={() => select(cityname, index)}>{cityname}</button>
                    ) :
                        <>
                        </>
                    }

                </div>
            </div>
        </>
    )

    return menu
}

/*
    - InputField contains 3 input fields for the user to fill; their name, address and city. 
    - After saving their info, it is saved to the array
*/

const InputField = () => {

    const [userlist, setUserlist] = useState([])

    const citylist = [
        'Espoo',
        'Helsinki',
        'Vantaa',
        'Turku',
        'Tampere',
    ]

    const saveUser = () => {

        const nameField = document.getElementById('name')
        const addressField = document.getElementById('address')
        const dropbtn = document.getElementById('dropbtn')

        const clearFields = () => {
            nameField.value = ''
            addressField.value = ''
        }

        if (nameField.value.length > 0 && addressField.value.length > 0 && dropbtn.value !== 'City') {

            console.log('Button value: ' + dropbtn.value)

            const user = {
                name: `${firstLetterToUppercase(nameField.value)}`,
                address: `${firstLetterToUppercase(addressField.value)}`,
                city: `${dropbtn.value}`
            }

            clearFields()

            // If we want the table on site to update whenewer a new user is added, we need to use this '.concat()' method
            setUserlist(userlist.concat(user))
        } else {
            alert('Please input all asked information')
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
        return (
            <tr>
                <td>{props.user.name}</td>
                <td>{props.user.address}</td>
                <td>{props.user.city}</td>
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

        const TheTable = (renderStyle) => {
            return (
                <table className={renderStyle}>
                    <tbody className={renderStyle}>
                        <tr className={renderStyle}><th className={renderStyle}>Name</th><th className={renderStyle}>Address</th><th>City</th><th className={renderStyle}>Users: {userlist.length}</th></tr>
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
                {userlist.length < 5 ? TheTable('borderless') : TheTable('border')}
            </>
        )
    }

    /* 
        - InputField is only the 3 different textFields with a button to save the information on those fields
        - UserMap shows all info on the list assigned to it on the page.
    */

    return (
        <>
            <div id='inputFields'>
                <input className="textInput" type="text" id="name" name="name" placeholder="Name" /><br></br>
                <input className="textInput" type="text" id="address" name="address" placeholder="Address" /><br></br>
                <DropDownMenu title='Select city ⏬' list={citylist} />
                <input id='savebutton' type="submit" value="Save" onClick={saveUser} />
            </div>
            <UserMap userlist={userlist} />
            <Message visibility='true' ></Message>
        </>
    )
}

export {
    InputField
}