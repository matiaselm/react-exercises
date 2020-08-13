import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import UserTable from './UserTable';
import Home from './Home';
import BillInformation from './BillInformation';
import Login from './Login';
import Logout from './Logout';

const RouterMenu = (props) => {

    const user = useContext(UserContext)

    return <Router>
        <main>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/usertable'>Users</Link></li>
                    {!user.username ? <li><Link to='/login'>Login</Link></li> : <li><Link to='/logout'>Logout</Link></li>}
                    {user.admin && <li><Link to='/billinformation'>Bills</Link></li>}
                </ul>
            </nav>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path='/usertable' component={UserTable} />
            <Route path='/billinformation' component={BillInformation} />
        </main>
    </Router>
}

export default RouterMenu