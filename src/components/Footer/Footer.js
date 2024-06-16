// src/components/Footer.js

import React from 'react';
import './Footer.css';
import Button from '../Buttons/Button'
import TextAnimation from '../Landing page/TextAnimation'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h1 className="footer-hero-text">Finding Jobs, Creating Livelihoods</h1>
        <p className="footer-para-text" ><strong><TextAnimation/></strong> is now available on </p>
        <footer>
        
  <div class="store-buttons">
    <a href="https://play.google.com/store" class="store-button">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Available on Google Play" />
    </a>
    <a href="https://www.apple.com/app-store/" class="store-button">
      <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
    </a>
  </div>
</footer>

        {/* <h6>
### Empowering You with Jobs and Livelihood<br></br>
### Beyond Jobs: Building Livelihoods Together<br></br>
### Your Journey to a Better Life Starts Here<br></br>
### More Than Jobs: We Secure Your Future<br></br>
### Finding Jobs, Creating Livelihoods
</h6> */}


      </div>
      <p>&copy; 2024 KamAi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
