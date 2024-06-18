import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Landing page/HeroSection';
import FlamingoComponent from './components/moreFeatures/FlamingoComponent';
import DownloadSection from './components/Download/DownloadSection';
import Why from './components/problemWhy/why';



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
      </Section>
      
      <Section
        backgroundColor="#111"  //#FFA500
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >
      <Why />
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
