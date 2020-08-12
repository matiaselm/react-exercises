import React, { useState, useEffect, useContext } from 'react';
import UserTable from './components/UserTable';
import Home from './components/Home';
import BillInformation from './components/BillInformation';
import Login from './components/Login';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { UserProvider, UserContext, UserDispatchContext } from './contexts/UserContext';

const App = () => {

    return (
        <div className="App">
            <UserProvider>
                <Router>
                    <main>
                        <nav>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/usertable'>Users</Link></li>
                                <li><Link to='/billinformation'>Bills</Link></li>
                            </ul>
                        </nav>
                        <Route exact path='/' component={Home} />
                        <Route path='/login' component={Login} />
                        <Route path='/usertable' component={UserTable} />
                        <Route path='/billinformation' component={BillInformation} />
                    </main>
                </Router>
            </UserProvider>
        </div >
    );
}

export { App };
