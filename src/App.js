
import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import HeroSection from './components/Landing page/HeroSection';
import Button from './components/Buttons/Button';
import FlamingoComponent from './components/moreFeatures/FlamingoComponent';
import MagicCursor from './components/MagicCursor/MagicCursor';

function App() {

  return (

    <div className="App">
      <MagicCursor />
      <Header />
      <Section
        backgroundColor="teal"
        borderTopRightRadius="0px"
        borderTopLeftRadius="0px"
      >
        <HeroSection />
      </Section>
      <Section 
        backgroundColor="#FFBF78" 
        borderTopRightRadius="40px" 
        borderTopLeftRadius="40px" 
      > 
 <FlamingoComponent />

            </Section>
      <Section 
        backgroundColor="#008080" 
      >
        <div className="testing-div" backgroundColor= "#008080">HI</div>
      </Section>
      <Section 
        backgroundColor="#FFC107" 
      />
      
    </div>
  );
}

export default App;