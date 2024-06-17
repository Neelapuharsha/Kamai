import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Landing page/HeroSection';
import FlamingoComponent from './components/moreFeatures/FlamingoComponent';
import MagicCursor from './components/MagicCursor/MagicCursor';
import Highlights from './components/Section/Highlights';

function App() {
  return (
    <div className="App">
      <MagicCursor />
      <Header />
      <main className="main-container">
        <article className="article-container">
          <Section
            backgroundColor="teal"
            borderTopRightRadius="0px"
            borderTopLeftRadius="0px"
          ><HeroSection />
          </Section>
          <Section
            backgroundColor="#FFBF78"
            borderTopRightRadius="40px"
            borderTopLeftRadius="40px"
          ><Highlights/>
            
          </Section>
          <Section
            backgroundColor="#EF9C66"
            borderTopRightRadius="40px"
            borderTopLeftRadius="40px"
          ><FlamingoComponent />
          </Section>
        </article>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
