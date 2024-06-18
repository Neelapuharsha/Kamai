import React, { useState, useEffect } from 'react';
import './Header.css';
import Button from '../Buttons/Button';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    setExpanded(!expanded);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : ''}`}>
      <nav className="nav">
        <ul className={`menu ${scrolled && !expanded ? 'hidden' : ''}`}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="logo" onClick={handleLogoClick}>
          {expanded ? 'Project K' : 'K'}
        </div>
        <Button className={`btn ${scrolled && !expanded ? 'hidden' : ''}`} text="Download Project K" textColor="white" />
      </nav>
    </header>
  );
}

export default App;
