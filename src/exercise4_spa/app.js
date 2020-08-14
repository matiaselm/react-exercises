import React from 'react';
import RouterMenu from './components/RouterMenu';
import { UserProvider } from './contexts/UserContext';
import Container from 'react-bootstrap/Container';

/*
    The app works as is asked in assignment, at least I think so. 
    There's no real functionality behind the buttons and there's some hard-coded things, like admin.
    I intend to remove those hard-coded things and add button functionality on the next assignment.
*/

const App = () => {
    return (
        <Container className="App">
            <UserProvider>
                <RouterMenu></RouterMenu>
            </UserProvider>
        </Container >
    );
}

export { App };
