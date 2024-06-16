// import React, { useState, useEffect } from 'react';
// import './HeroSection.css';
// import ImageComponent from './ImageComponent';
// import logo from './images/image.png';
// import student1 from './images/s1.png';
// import student2 from './images/f2.png';
// import student3 from './images/f1.png';
// import student4 from './images/s4.png';
// import student5 from './images/f3.png';
// import student6 from './images/f4.png';
// import student7 from './images/f5.png';
// import Button from '../Buttons/Button';
// import TextAnimation from './TextAnimation';

// const HeroSection = () => {
//   const images = [student1, student2, student3, student4];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fadeIn, setFadeIn] = useState(true);

//   useEffect(() => {
    
//     const interval = setInterval(() => {
//       setFadeIn(false); 
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         setFadeIn(true);
//       }, 0); 
//     },3000);

//     return () => clearInterval(interval); 
//   }, [images.length]);

//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <div className="hero-text">
//           <div className="hero-icon">
            
//           </div>
//           <h1>Build Your Future, Grab your Dream Job</h1>
//           <p>Transform your career aspirations into achievements and embrace a future filled with passion and purpose with <strong><TextAnimation/></strong> by your side!</p>
//           <div className="button-container">
//           <Button className="primary-btn" text="Download Our App" textColor="white" animation="slideIn 1.5s ease-out forwards; opacity: 0;" />
//           <Button className="secondary-btn" text="Know More" animation="slideIn 1.5s ease-out forwards; opacity: 0;" />
//           </div>
//         </div>

//         <div className="hero-images">
//           {/* Example of using ImageComponent with different borderRadius */}
//           <ImageComponent 
//             src={images[(currentIndex + 1) % images.length]} 
//             alt="Student 1" 
//             className={`hero-image img-rounded ${fadeIn ? 'fade-in' : 'fade-out'}`} 
//             style={{ animationName: 'border-radius-animation-50' }} 
//           />
//           <ImageComponent 
//             src={images[(currentIndex + 2) % images.length]} 
//             alt="Student 2" 
//             className={`hero-image img-rounded ${fadeIn ? 'fade-in' : 'fade-out'}`} 
//             style={{ animationName: 'border-radius-animation-94' }} 
//           />
//           <ImageComponent 
//             src={images[(currentIndex + 3) % images.length]} 
//             alt="Student 3" 
//             className={`hero-image img-rounded ${fadeIn ? 'fade-in' : 'fade-out'}`} 
//             style={{ animationName: 'border-radius-animation-94' }} 
//           />
//           <ImageComponent 
//             src={images[(currentIndex + 4) % images.length]} 
//             alt="Student 4" 
//             className={`hero-image img-rounded ${fadeIn ? 'fade-in' : 'fade-out'}`} 
//             style={{ animationName: 'border-radius-animation-50' }} 
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import ImageComponent from './ImageComponent';
import student1 from './images/w6.webp';
import student3 from './images/w5.webp';
import student2 from './images/w7.webp';
import student4 from './images/w4.webp';
import Button from '../Buttons/Button';
import TextAnimation from './TextAnimation';

const HeroSection = () => {
  const images = [student1, student2, student3, student4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 900); // Short delay for fade-out transition
    }, 3800);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-icon">
            {/* Add logo or icon if needed */}
          </div>
          <h1>Build Your Future, Grab your Dream Job</h1>
          <p>Transform your career aspirations into achievements and embrace a future filled with passion and purpose with <strong><TextAnimation/></strong> by your side!</p>
          <div className="button-container">
            <Button className="primary-btn" text="Download Our App" textColor="white" />
            <Button className="secondary-btn" text="Know More" />
          </div>
        </div>

        <div className="hero-images">
          <ImageComponent 
            src={images[currentIndex % images.length]} 
            alt="Student 1" 
            className={`hero-image img-rounded1 ${fadeIn ? 'fade-in' : 'fade-out'}`} 
            style={{ 
              animation: 'translateFromLeft 1s ease-in-out, border-radius-animation-50 5s infinite alternate' ,
              animationDelay: '0s, 0.5s' ,
              
            }} 
          />
          <ImageComponent 
            src={images[(currentIndex + 1) % images.length]} 
            alt="Student 2" 
            className={`hero-image img-rounded ${fadeIn ? 'fade-in' : 'fade-out'}`} 
            style={{ 
              animation: 'translateFromTop 1s ease-in-out, border-radius-animation-94 5s infinite alternate' ,
              animationDelay: '0s, 0.5s' 
            }} 
          />
          <ImageComponent 
            src={images[(currentIndex + 2) % images.length]} 
            alt="Student 3" 
            className={`hero-image img-rounded ${fadeIn ? 'fade-in' : 'fade-out'}`} 
            style={{ 
              animation: 'translateFromRight 1s ease-in-out, border-radius-animation-94 5s infinite alternate' ,
              animationDelay: '0s, 0.5s' 
            }} 
          />
          <ImageComponent 
            src={images[(currentIndex + 3) % images.length]} 
            alt="Student 4" 
            className={`hero-image img-rounded1 ${fadeIn ? 'fade-in' : 'fade-out'}`} 
            style={{ 
              animation: 'translateFromBottom 1s ease-in-out, border-radius-animation-50 5s infinite alternate' ,
              animationDelay: '0s, 0.5s' 
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
