import React from 'react';
import './Highlights.css';

const highlightsData = [
  {
    image: 'https://img1.wsimg.com/isteam/stock/2akzpgl/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/fx-gs', // Random image from Unsplash
    title: 'Search Your Job in Your Native Language',
    keyHighlight: 'Job listings in multiple languages',
  },
  {
    image: 'https://www.essentialrecruitment.co.uk/wp-content/uploads/2023/03/Random-artwork-14.gif', // Random image from Unsplash
    title: 'Create Your Video Resume',
    keyHighlight: 'Record professional video resumes',
  },
  {
    image: 'https://nestscale.com/wp-content/uploads/2022/08/mobile-friendly-1.jpg', // Random image from Unsplash
    title: 'Get Personalized Job Recommendations',
    keyHighlight: 'Tailored job suggestions',
  },
  {
    image: 'https://source.unsplash.com/random/803x600', // Random image from Unsplash
    title: 'Access Expert Career Advice',
    keyHighlight: 'Tips on resume writing',
  },
  {
    image: 'https://source.unsplash.com/random/804x600', // Random image from Unsplash
    title: 'Text to Speech',
    keyHighlight: 'Convert job descriptions to audio',
  },
  {
    image: 'https://source.unsplash.com/random/805x600', // Random image from Unsplash
    title: 'Create Your Own Resume',
    keyHighlight: 'Build a resume with customizable templates',
  },
];

const Highlights = () => {
  return (
    <div className="highlights-main">
      <div className="main-heading">
        <h1>Our Standout Features</h1>
      </div>
      <div className="highlights-article">
        {highlightsData.map((highlight, index) => (
          <div className="highlight-card" key={index}>
            <div className="highlight-text-container">
              <h3>{highlight.title}</h3>
            </div>
            <div className="highlight-image-container">
              <img src={highlight.image} alt={highlight.title} className="highlight-image" />
            </div>
            <div className="highlight-text-container">
              <p>{highlight.keyHighlight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
