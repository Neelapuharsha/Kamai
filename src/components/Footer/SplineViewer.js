// // src/components/SplineViewer.js

// import React, { useEffect } from 'react';

// const SplineViewer = () => {
//   useEffect(() => {
//     // Load the spline-viewer script dynamically
//     const script = document.createElement('script');
//     script.src = 'https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js';
//     script.type = 'module';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Clean up script tag when component unmounts
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <spline-viewer url="https://prod.spline.design/srCEmVK1iTeFHc7f/scene.splinecode"></spline-viewer>
//   );
// };

// export default SplineViewer;

// src/components/SplineViewer.js

import React, { useEffect } from 'react';
import TextAnimation from '../Landing page/TextAnimation'// Make sure to import TextAnimation component

const SplineViewer = () => {
  useEffect(() => {
    // Load the spline-viewer script dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script tag when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
     
      <footer className="footer">
      <div className='demo1'>
      <spline-viewer url="https://prod.spline.design/srCEmVK1iTeFHc7f/scene.splinecode"></spline-viewer></div>
        <div className='demo2'>
        <h4 className="footer-section-text">Download Now</h4>
          <h1 className="footer-hero-text">Finding Jobs, Creating Livelihoods</h1>
          
        </div>
        <div className='demo3'>
        <p className="footer-para-text"><strong><TextAnimation/></strong> is now available on </p>
        <div className="store-buttons">
          
          
            <a href="https://play.google.com/store" className="store-button">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Available on Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" className="store-button">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
            </a>
          </div>
        </div>
        <p>&copy; 2024 KamAi. All rights reserved.</p>
      </footer>
    </>
  );
};

export default SplineViewer;
