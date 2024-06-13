import React from 'react';
import './Section.css';

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