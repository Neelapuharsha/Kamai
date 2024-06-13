import React from 'react';
import './Section.css';
import Header from '../Header/Header';

const Section = ({ backgroundColor, borderTopRightRadius, borderTopLeftRadius }) => {
  return (
    <section 
      className="section" 
      style={{ 
        backgroundColor, 
        borderTopRightRadius, 
        borderTopLeftRadius 
      }}
    >
    </section>
  );
};

export default Section;
