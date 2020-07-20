import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo.js'


/*
- userlist is given from props. It holds the global variable userList that is supposed to update whenever there are new users added
- userlist.map((user)=>...) creates as many HTML-elements as there are user-type objects on the list and shows them on the page as UserInfo-components
*/

const UserTable = (props) => {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3003/people')
            .then(response => response.json())
            .then((responseData) => {
                console.log('response fulfilled' + responseData)
                setList(responseData)
            })
    }, [])

    return (
        <table className={props.className}>
            <tbody className={props.className}>
                <tr className={props.className}><th className={props.className}>Name</th><th className={props.className}>Address</th><th className={props.className}>Users: {list.length}</th></tr>
                {
                    list.map((user, i) =>
                        <UserInfo className={props.userInfoClass} user={user} key={i} index={i} />
                    )
                }
            </tbody>
        </table>
    )
}

export { UserTable }