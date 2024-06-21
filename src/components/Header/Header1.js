// import React, { useState, useEffect } from 'react';
// import './Header1.css';
// import Button from '../Buttons/Button';
 
// function Header1() {
//   const [scrolled, setScrolled] = useState(false);
//   const [expanded, setExpanded] = useState(true);
//   const [flag, setFlag] = useState(false);
 
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setScrolled(isScrolled);
 
//       // Add condition to set flag to false when scrolled is true
//       if (isScrolled) {
//         setFlag(false);
//         setExpanded(false);
//       }
//     };
 
//     window.addEventListener('scroll', handleScroll);
 
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Empty dependency array means this effect runs only once on mount and cleans up on unmount
 
//   const handleLogoClick = () => {
//     setExpanded(!expanded);
//     setFlag(!flag);
//   };
 
//   return (
//     <header className={`header ${scrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : ''} ${flag ? 'flag' : ''}`}>
//       <nav className="nav">
//         <ul className={`menu ${scrolled && !expanded ? 'hidden' : ''}`}>
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//         <div className="logo" onClick={handleLogoClick}>
//           {scrolled ? 'K' : 'Project K'}
//         </div>
//         <Button className={`btn ${scrolled && !expanded ? 'hidden' : ''}`} text="Download Project K" textColor="white" />
//       </nav>
//     </header>
//   );
// }
 
// export default Header1;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header1.css';
import Button from '../Buttons/Button';
import FullLogo from '../Landing page/images/WhiteK.png'

function Header1() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);

      if (isScrolled) {
        setFlag(false);
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    setExpanded(!expanded);
    setFlag(!flag);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : ''} ${flag ? 'flag' : ''}`}>
      <nav className="nav">
        <ul className={`menu ${scrolled && !expanded ? 'hidden' : ''}`}>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="why" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="what" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
         {/* Logic Improved to accomadate 3 statements ! */}
        <div className="logo" onClick={handleLogoClick}>
       {(scrolled && expanded) ? 'KamAi' : !scrolled ?  'KamAi' : expanded ? 'KamAi' : 'K'}
        {/* Logic Improved to accomadate 3 statements ! */}
        </div>
        <Button className={`btn ${scrolled && !expanded ? 'hidden' : ''}`} text="Download Project K" textColor="white" />
      </nav>
    </header>
  );
}

export default Header1;
