import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header'

function App() {
  return (
      
    <div className="App">
    <Header />
      <Section 
        backgroundColor="teal" 
        borderTopRightRadius="0px" 
        borderTopLeftRadius="0px" 
      />
      <Section 
        backgroundColor="coral" 
        borderTopRightRadius="40px" 
        borderTopLeftRadius="40px" 
      />
      <Section 
        backgroundColor="#E6E6FA" 
        borderTopRightRadius="40px" 
        borderTopLeftRadius="40px" 
      />
    </div>
  );
}

export default App;
