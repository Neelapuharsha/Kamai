import React from 'react';
import './Section.css';

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
      Section 1
    </section>
  );
};

export default Section;
