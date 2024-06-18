import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Landing page/HeroSection';
import FlamingoComponent from './components/moreFeatures/FlamingoComponent';
import DownloadSection from './components/Download/DownloadSection';
import Contact from './components/Contact/Contact';
import Highlights from './components/Section/Highlights'
import Sphere from './components/Sphere/Sphere';
// import HighlightsMain from './components/Section/Highlights';


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
        backgroundColor="#f1f6fb"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >
        <Highlights/>
        {/* <FlamingoComponent /> */}
      </Section>
      
      <Section
        backgroundColor="#fff"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >

    <Contact />
      </Section>
      <Section
        backgroundColor="#111"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >
        <Footer />
      </Section>
      
      <Section

        backgroundColor="#111"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >
        <DownloadSection />
      </Section>
      
    </div>
  );
}

export default App;
