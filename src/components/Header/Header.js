// import React, { useState, useEffect } from 'react';
// import './Header.css';
// import Button from '../Buttons/Button';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     const debounce = (func, wait) => {
//       let timeout;
//       return (...args) => {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, args), wait);
//       };
//     };

//     const debouncedHandleScroll = debounce(handleScroll, 20);

//     window.addEventListener('scroll', debouncedHandleScroll);
//     return () => {
//       window.removeEventListener('scroll', debouncedHandleScroll);
//     };
//   }, []);

//   return (
//     <header className={`header ${scrolled ? 'scrolled' : ''}`}>
//       <nav className="nav">
//         <ul className="menu">
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//         <div className="logo">Project K</div>
//     <Button className="btn" text="Download Project K" textColor="white" /> 
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React, { useState, useEffect } from 'react';
// import './Header1.css';
// import Button from '../Buttons/Button';

// function Header1() {
//   const [scrolled, setScrolled] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleLogoClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <header className={`header ${expanded ? 'expanded' : ''} ${scrolled ? 'scrolled' : ''}`}>
//       <nav className="nav">
//         <ul className={`menu ${scrolled && !expanded ? 'hidden' : ''}`}>
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//         <div className="logo" onClick={handleLogoClick}>
//           {expanded ? 'Project K' : 'K'}
//         </div>
//         <Button className={`btn ${scrolled && !expanded ? 'hidden' : ''}`} text="Download Project K" textColor="white" />
//       </nav>
//     </header>
//   );
// }

// export default Header1;
import React, { useState, useEffect } from 'react';
import './Header1.css';
import Button from '../Buttons/Button';

function Header1() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(true);

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
    // Toggle expanded state only if not scrolled
    if (!scrolled) {
      setExpanded(!expanded);
    }

    // Alert current values of expanded and scrolled
    
  };

  return (
    <header  onClick={handleLogoClick}>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="logo">
          {expanded ? 'Project K' : 'K'}
        </div>
        <Button className={`btn ${scrolled && !expanded ? 'hidden' : ''}`} text="Download Project K" textColor="white" />
      </nav>
    </header>
  );
}

export default Header1;
