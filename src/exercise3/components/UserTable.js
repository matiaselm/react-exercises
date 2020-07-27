import React, { useState } from 'react';

/*
- userlist is given from props. It holds the global variable userList that is supposed to update whenever there are new users added
- userlist.map((user)=>...) creates as many HTML-elements as there are user-type objects on the list and shows them on the page as UserInfo-components
*/

const UserTable = (props) => {

    let list = props.list

    // translates the data to an array before rendering it
    if (!Array.isArray(list)) {
        list = [list]
    }

    try {
        return (
            <table className={props.className}>
                <tbody className={props.className}>
                    <tr><th>Name</th><th>Address</th><th>Zip code</th><th>City</th><th>Phone</th></tr>
                    {
                        list.map((user, i) =>
                            <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                                <td>{user.postalNumber}</td>
                                <td>{user.city}</td>
                                <td>{user.phoneNumber}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    } catch {
        console.log('Error getting data')
        return (
            <h1>Error showing the list</h1>
        )
    }
}

export { UserTable }