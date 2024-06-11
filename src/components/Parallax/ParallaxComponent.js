

import React from 'react';
import { Parallax } from 'react-parallax';

import Section from '../Section';
import Footer from '../Footer';
import Header from '../Header';
import './ParallaxComponent.css';

const ParallaxComponent = () => {
  return (
    <div>
     <Header/>
      <Parallax
        bgImage="https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        strength={500}
      >
        <div className="parallax-section">
          <h1 className="parallax-title">Welcome to the Parallax World</h1>
        </div>
      </Parallax>
      <Section id="section1" title="Home" content="Welcome to our website. Enjoy the parallax scrolling effect!" />
      <Parallax
        bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
        strength={300}
      >
        <div className="parallax-section">
          <h1 className="parallax-title">About Us</h1>
        </div>
      </Parallax>
      <Section id="section2" title="About" content="We are a company that values creativity and innovation." />
      <Parallax
        bgImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
        strength={200}
      >
        <div className="parallax-section">
          <h1 className="parallax-title">Our Services</h1>
        </div>
      </Parallax>
      <Section id="section3" title="Services" content="We offer a wide range of services to meet your needs." />
      <Parallax
        bgImage="https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        strength={100}
      >
        <div className="parallax-section">
          <h1 className="parallax-title">Contact Us</h1>
        </div>
      </Parallax>
      <Section id="section4" title="Contact" content="Get in touch with us to learn more about what we offer." />
      
      <Footer />
    </div>
  );
};

export default ParallaxComponent;
