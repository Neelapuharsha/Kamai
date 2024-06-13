import React from 'react';
import './Section.css';
import Header from '../Header/Header';

const Section = ({ backgroundColor, borderTopRightRadius, borderTopLeftRadius, children }) => {
  return (
    <section 
      className="section" 
      style={{ 
        backgroundColor, 
        borderTopRightRadius, 
        borderTopLeftRadius 
      }}
    >
      {children} {/* Render children */}
    </section>
  );
};

export default Section;