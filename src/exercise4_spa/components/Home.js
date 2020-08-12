import React, { useContext } from 'react';
import { UserProvider, UserContext, UserDispatchContext } from '../contexts/UserContext';

const Home = () => {
    const user = useContext(UserContext)
    return <div>
        <h1 id='header'>Hi and welcome {user.username}!</h1>
        <h2 id='header2'>My name is Matias Jalava</h2>
        <ul className='infoList'>
            <li className='info'>Second year student at Metropolia UAS</li>
            <li className='info'>matias@elm.fi</li>
            <li className='info'>050313952</li>
        </ul>
        {user.admin ? <p>you're an admin</p> : <></>}
    </div>
}

export default Home