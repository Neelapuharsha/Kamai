// src/components/Section.js

import React from 'react';
import './Section.css';

const Section = ({ id, title, content }) => {
  return (
    <div className="section" id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Section;
