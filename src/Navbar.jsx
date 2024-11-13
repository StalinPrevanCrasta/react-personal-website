import React from 'react';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Projects">Projects</a></li>
        <li><a href="/Resume">Resume</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;