import React from 'react';

const UserInfo = (props) => {
    return (
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.address}</td>
        </tr>
    )
}

export default UserInfo 