import React from 'react';
import logo from './sun.png';
import '../../App.css';



const Header = ({ title }) => (
  <div className="instructions">
    <header className="App-header">
          <h1 className="App-title">S<img src={logo} className="App-logo" alt="logo" />L - Cycle</h1>
        </header>
  </div>
);

export default Header;
