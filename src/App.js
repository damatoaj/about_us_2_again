import React from 'react';
import logo from './logo.svg';
import './App.css';
import Katie from './Katie.js';
import Brian from './Brian.js';
import Arthur from './Arthur.js';

function App() {
  return (
    <div className="App">
    <h2>We are about!</h2>
      <div className="container">
      <Arthur />
      <Katie />
      <Brian />
      </div>
    </div>
  );
}

export default App;
