import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './styles/Navbar.css';
import logo from './assets/logo.png';

function Navbar() {
  const navigate = useNavigate(); // Initialize the navigation hook

  // Function to handle navigation back to the main page and scroll to a section
  const handleNavigation = (hash) => {
    navigate('/'); // Navigate to the main page
    setTimeout(() => {
      const section = document.querySelector(hash);
      if (section) {
        // Scroll the section to the top of the viewport, accounting for the Navbar height
        const yOffset = -80; // Adjust this value based on your Navbar height
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100); // Delay to ensure the page has loaded before scrolling
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
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
          <Link to="/resume">Resume</Link> {/* Still navigates to the Resume page */}
        </li>
        <li>
          <a href="#contact" onClick={() => handleNavigation('#contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
