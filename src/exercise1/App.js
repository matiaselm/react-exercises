import React from 'react';
import logo from './logo.svg';
import './styles/style.css';
import { CounterScreen, HeaderBox, CarList } from './components/Components.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <HeaderBox header="Counter1" paragraph="Click the buttons to change the number" />
        <CounterScreen />
        <CarList language='fi' />

      </header>
    </div >
  );
}

export default App;
