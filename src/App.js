import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Landing page/HeroSection';
import Button from './components/Buttons/Button';
import FlamingoComponent from './components/moreFeatures/FlamingoComponent';
import MagicCursor from './components/MagicCursor/MagicCursor';
import Highlights from './components/Section/Highlights';


function App() {
  const highlightsData = [
    {
      image: 'path/to/screenshot1.png',
      title: 'Search Your Job in Your Native Language',
      description: (
        <ul>
          <li>Job listings in multiple languages</li>
          <li>Easy navigation and application</li>
          <li>Language preference filters</li>
          <li>Localized job descriptions</li>
          <li>Supports English, Spanish, Mandarin, Hindi, etc.</li>
        </ul>
      ),
      details: 'Detailed information about searching jobs in your native language.',
    },
    {
      image: 'path/to/screenshot2.png',
      title: 'Create Your Video Resume',
      description: (
        <ul>
          <li>Record professional video resumes</li>
          <li>Highlight key skills and experiences</li>
          <li>Showcase personality and communication</li>
          <li>Use templates for high-quality videos</li>
          <li>Easily share with employers</li>
        </ul>
      ),
      details: 'Detailed information about creating your video resume.',
    },
    {
      image: 'path/to/screenshot3.png',
      title: 'Get Personalized Job Recommendations',
      description: (
        <ul>
          <li>Tailored job suggestions</li>
          <li>Intelligent matching algorithm</li>
          <li>Targeted job alerts</li>
          <li>Discover matching roles</li>
          <li>Stay updated with new opportunities</li>
        </ul>
      ),
      details: 'Detailed information about personalized job recommendations.',
    },
    {
      image: 'path/to/screenshot4.png',
      title: 'Access Expert Career Advice',
      description: (
        <ul>
          <li>Tips on resume writing</li>
          <li>Interview preparation advice</li>
          <li>Career development workshops</li>
          <li>Salary negotiation strategies</li>
          <li>Guidance from industry experts</li>
        </ul>
      ),
      details: 'Detailed information about accessing expert career advice.',
    },
  ];

  return (
    <div className="App">
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
        backgroundColor="#FFA500"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      >
        <Highlights highlights={highlightsData} />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
