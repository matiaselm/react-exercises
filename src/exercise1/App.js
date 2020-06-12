import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterScreen, HeaderBox, CarList } from './components/Components.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <HeaderBox header="Counter1" />
        <CounterScreen />
        <CarList />


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div >
  );
}

export default App;
