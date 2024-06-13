
// import React from 'react';
// import './HeroSection.css';
// import ImageComponent from './ImageComponent'; // Ensure correct path
// import logo from './images/image.png'; 
// import student1 from './images/s1.png'; 
// import student2 from './images/f2.png'; 
// import student3 from './images/f1.png'; 
// import student4 from './images/s4.png'; 

// const HeroSection = () => {
//     return (
//       <section className="hero">
//         <div className="hero-content">
//           <div className="hero-text">
//             <div className="hero-icon">
//               <ImageComponent src={logo} alt="Icon" className="icon-img" />
//             </div>
//             <h1>Build Your Future, Grab your Dream Job</h1>
//             <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <strong>Velitofficia consequat.</strong></p>
//             <button className="hero-button">Get Started</button>
//           </div>
          
//           <div className="hero-images">
//           {/* Example of using ImageComponent with different borderRadius */}
//           <ImageComponent src={student1} alt="Student 1" className="hero-image" borderRadius="50%" />
//           <ImageComponent src={student2} alt="Student 2" className="hero-image" borderRadius="59px 0px 59px 0px" />
//           <ImageComponent src={student3} alt="Student 3" className="hero-image" borderRadius="59px 0px 59px 0px" />
//           <ImageComponent src={student4} alt="Student 4" className="hero-image" borderRadius="50%" />
//         </div>
//         </div>
//       </section>
//     );
// };

// export default HeroSection;

import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import ImageComponent from './ImageComponent'; // Ensure correct path
import logo from './images/image.png'; 
import student1 from './images/s1.png'; 
import student2 from './images/f2.png'; 
import student3 from './images/f1.png'; 
import student4 from './images/s4.png'; 
import Button from '../Buttons/Button';

const HeroSection = () => {
    const images = [ student1, student2, student3, student4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Function to rotate images every 4 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [images.length]); // Dependency array ensures useEffect runs only on mount and when images.length changes

    return (
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-icon">
            
            </div>
            <h1>Build Your Future, Grab your Dream Job</h1>
            <p>Transform your career aspirations into achievements and embrace a future filled with passion and purpose with <strong> KamAi</strong> by your side! </p>
            <Button className="primary-btn" text="Download Our App" />
          </div>
          
          <div className="hero-images">
            {/* Example of using ImageComponent with different borderRadius */}
            <ImageComponent src={images[(currentIndex + 1) % images.length]} alt="Student 1" className="hero-image" borderRadius="50%" />
            <ImageComponent src={images[(currentIndex + 2) % images.length]} alt="Student 2" className="hero-image" borderRadius="94px 0px " />
            <ImageComponent src={images[(currentIndex + 3) % images.length]} alt="Student 3" className="hero-image" borderRadius="94px 0px " />
            <ImageComponent src={images[(currentIndex + 4) % images.length]} alt="Student 4" className="hero-image" borderRadius="50%" />
          </div>
        </div>
      </section>
    );
};

export default HeroSection;
