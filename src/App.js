import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import Header from './components/Header/Header'

function App() {
  
  return (

    <div className="App">
      <Header />
      <Section
        backgroundColor="#1301600f"
        borderTopRightRadius="0px"
        borderTopLeftRadius="0px"
      />
      <Section
        backgroundColor="#fff"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      />
      <Section
        backgroundColor="#F59300"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
      />
    </div>
  );
}

export default App;
