import React from 'react';
import './Section.css';

const Section = ({ backgroundImage, backgroundColor, borderTopRightRadius, borderTopLeftRadius, children }) => {
  return (
    <section 
      className="section" 
      style={{ 
        backgroundImage,
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