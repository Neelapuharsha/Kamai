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
    image: 'https://thumbs.dreamstime.com/b/expert-advice-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-82605690.jpg', // Random image from Unsplash
    title: 'Access Expert Career Advice',
    keyHighlight: 'Tips on resume writing',
  },
  {
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrHro6d3BTw7ZZ4IXgfb6_8aESB7-SsWfelDSSInZVamiMSnYpBZzGBaZBBrWxWwYgLqOHuOtroGvGjxrwzdUkhjwuIvM1u6chIblGKS1gQ6JVkjXr-Vztyk2zoYb1ylvhNgLgC5q6M-7LaiXT1xnAT96DvkPx89APNb8JEaz-1mnMRcfaOYYBHzQL/s1600/Text%20to%20Speech%20-%20Social%20-%201024x512.png', // Random image from Unsplash
    title: 'Text to Speech',
    keyHighlight: 'Convert job descriptions to audio',
  },
  {
    image: 'https://estricalla.hypotheses.org/files/2021/02/limitedexperience_hero_social.gif', // Random image from Unsplash
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
