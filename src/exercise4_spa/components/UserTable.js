import React, { useState, useEffect } from 'react';
import { BillInformation } from './BillInformation';

/*
- list is given from props. It holds the global variable userList that is supposed to update whenever there are new users added or asked to be shown
- list.map((user)=>...) creates as many HTML-elements as there are user-type objects on the list and shows them on the page as UserInfo-components
- state constant billState holds 2 variables, the user-object and visibility. 
    - User-object is given to the Bill-Information component. 
    - It's visibility is controlled with the billState.visibility-boolean that is controlled from here and from a callback function
*/

const UserTable = (props) => {

    let list = props.list

    const [billState, setBillState] = useState({
        user: {},
        visibility: false
    })

    const showBillInformation = (currentUser) => {
        // console.log('Bill status: ' + bill)
        setBillState({
            user: currentUser,
            visibility: true
        })
    }

    const setVisible = () => {
        setBillState({ visibility: false })
    }

    /* translates the data to an array before rendering it, straight from here:
        https://dev.to/cilvako/use-this-trick-to-map-over-single-objects-in-javascript-38nb
    */

    if (!Array.isArray(list)) {
        list = [list]
    }

    try {
        return (
            <>
                <table className={props.className}>
                    <tbody className={props.className}>
                        <tr><th>Name</th><th>Address</th><th>Zip code</th><th>City</th><th>Phone</th></tr>
                        {
                            list.map((user, i) =>
                                <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.address}</td>
                                    <td>{user.postalnum}</td>
                                    <td>{user.city}</td>
                                    <td>{user.phonenum}</td>
                                    {user.bills.length > 0 &&
                                        <td>
                                            <button value='bills' onClick={() => showBillInformation(user)}>Bills</button>
                                        </td>
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {billState.visibility ? <BillInformation setVisible={setVisible} user={billState.user}></BillInformation> : <></>}
            </>
        )
    } catch (e) {
        return (
            <h1>Error {e} showing the list</h1>
        )
    }
}

export { UserTable }