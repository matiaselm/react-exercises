import React, { useState, useEffect } from 'react';

/*
- userlist is given from props. It holds the global variable userList that is supposed to update whenever there are new users added
- userlist.map((user)=>...) creates as many HTML-elements as there are user-type objects on the list and shows them on the page as UserInfo-components
*/

const UserTable = (props) => {

    const [list, setList] = useState([])
    const [searchterm, setSearchterm] = useState(props.searchterm)

    useEffect(() => {
        console.log('Searchterm: ' + searchterm)
        fetch('http://localhost:3003/people/' + searchterm)
            .then(response => response.json())
            .then((responseData) => {
                console.log('response fulfilled' + responseData)
                setList(responseData)
            })
    }, [])

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
}

export { UserTable }