import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header1';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Landing page/HeroSection';
import FlamingoComponent from './components/moreFeatures/FlamingoComponent';
import DownloadSection from './components/Download/DownloadSection';
import Contact from './components/Contact/Contact';
import Highlights from './components/Section/Highlights'
import Sphere from './components/Sphere/Sphere';
import Why from './components/problemWhy/why';
import Header1 from './components/Header/Header1';
import Whatk from './components/WhatSection/whatk';
// import HighlightsMain from './components/Section/Highlights';


function App() {
  return (
    <div className="App">

      <Header1 />
      <Section
        borderTopRightRadius="0px"
        borderTopLeftRadius="0px"
      >
        <HeroSection />
      </Section>
      <Section

        backgroundImage="linear-gradient(45deg, #00c6ff, #0072ff)"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >
        <Why />

      </Section>
      <Section

        backgroundColor="#f1f6fb"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >
        <Whatk />

      </Section>

      <Section
      backgroundImage="linear-gradient(45deg, #00c6ff, #0072ff)"
        // backgroundColor="#f1f6fb"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >
        <Highlights />

      </Section>

      <Section
        backgroundColor="#fff"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >

        <Contact />
      </Section>



      <Section

        backgroundImage="linear-gradient(45deg, #00c6ff, #0072ff)"
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

    </div>
  );
}

export default App;
