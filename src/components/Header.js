import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 20);

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="logo">KamAi</div>
        <div className="cta-buttons">
          <button className="btn">Login</button>
          <button className="btn">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
