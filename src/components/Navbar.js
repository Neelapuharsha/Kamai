// src/components/Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Parallax Site</h1>
      <ul>
        <li><a href="#section1">Home</a></li>
        <li><a href="#section2">About</a></li>
        <li><a href="#section3">Services</a></li>
        <li><a href="#section4">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
