import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Landing page/HeroSection';
import FlamingoComponent from './components/moreFeatures/FlamingoComponent';
import Highlights from './components/Section/Highlights';



function App() {
  return (
    <div className="App">
      <Header />
      
      <Section
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
        backgroundColor="#FFA500"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >
        <Highlights highlights={highlightsData} />
      </Section>
      <Section
        backgroundColor="#111"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >
        <Footer />
      </Section>
      
    </div>
  );
}

export default App;
