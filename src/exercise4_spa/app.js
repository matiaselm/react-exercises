import React, { useState, useEffect } from 'react';
import UserTable from './components/UserTable';
import Home from './components/Home';
import BillInformation from './components/BillInformation';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const App = () => {

    return (
        <div className="App">

            <Router>
                <main>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/usertable'>Users</Link></li>
                            <li><Link to='/billinformation'>Bills</Link></li>
                        </ul>
                    </nav>
                    <Route exact path='/' component={Home} />
                    <Route path='/usertable' component={UserTable} />
                    <Route path='/billinformation' component={BillInformation} />
                </main>
            </Router>


        </div >
    );
}

export default App;
