import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Navbar.css';
import logo from './assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation back to the main page and scroll to a section
  const handleNavigation = (hash) => {
    navigate('/');
    setIsOpen(false); // Close the menu when navigating
    setTimeout(() => {
      const section = document.querySelector(hash);
      if (section) {
        const yOffset = -80; // Adjust this value based on your Navbar height
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#home" onClick={() => handleNavigation('#home')}>Home</a>
          </li>
          <li>
            <a href="#education" onClick={() => handleNavigation('#education')}>Education</a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleNavigation('#projects')}>Projects</a>
          </li>
          <li>
            <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          </li>
          <li>
            <a href="#contact" onClick={() => handleNavigation('#contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
