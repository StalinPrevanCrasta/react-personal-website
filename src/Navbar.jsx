import React from 'react';
import './styles/Navbar.css';
import logo from './assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Contact">Education</a></li>
        <li><a href="/Projects">Projects</a></li>
        <li><a href="/Resume">Resume</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;