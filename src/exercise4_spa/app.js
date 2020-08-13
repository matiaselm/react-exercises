import React from 'react';
import RouterMenu from './components/RouterMenu';
import { UserProvider } from './contexts/UserContext';

const App = () => {
    return (
        <div className="App">
            <UserProvider>
                <RouterMenu></RouterMenu>
            </UserProvider>
        </div >
    );
}

export { App };
