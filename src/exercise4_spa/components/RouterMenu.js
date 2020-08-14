import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import { UserContext, UserDispatchContext } from '../contexts/UserContext';
import UserTable from './UserTable';
import Home from './Home';
import BillInformation from './BillInformation';
import Login from './Login';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const RouterMenu = (props) => {

    const user = useContext(UserContext);
    const setUser = useContext(UserDispatchContext);

    const logout = () => {
        setUser({
            uid: '',
            name: '',
            token: '',
            isLoggedIn: false
        });
    };

    return <Router>
        <main>
            <Navbar bg="dark" expand="lg" variant="dark" style={{ marginBottom: '2ch' }}>
                <Nav bg="dark">
                    <Nav.Link><Link style={{ color: 'lightgrey' }} to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link style={{ color: 'lightgrey' }} to='/usertable'>Users</Link></Nav.Link>
                    {!user.name && <Nav.Link><Link style={{ color: 'lightgrey' }} to='/login'>Login</Link></Nav.Link>}
                    {user.isLoggedIn && <Nav.Link><Link style={{ color: 'lightgrey' }} to='/billinformation'>Bills</Link></Nav.Link>}
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{ color: 'lightgrey' }}>
                        {user.isLoggedIn && <>Signed in as: {user.uid} <Button onClick={logout} variant="danger" size="sm" >Logout</Button></>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login}>
                {user.isLoggedIn && <Redirect to='/' />}
            </Route>
            <Route path='/usertable' component={UserTable} />
            <Route path='/billinformation' component={BillInformation} />
        </main>
    </Router>
}

export default RouterMenu