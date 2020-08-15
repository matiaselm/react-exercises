import React from 'react';
import RouterMenu from './components/RouterMenu';
import { UserProvider } from './contexts/UserContext';
import Container from 'react-bootstrap/Container';

/*
    
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
