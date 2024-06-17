import React from 'react';
import './Highlights.css';

const highlightsData = [
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&q=80',
    title: 'Search Your Job in Your Native Language',
    description: (
      <ul>
        <li>Job listings in multiple languages</li>
        <li>Easy navigation and application</li>
        <li>Language preference filters</li>
        <li>Localized job descriptions</li>
        <li>Supports English, Spanish, Mandarin, Hindi, etc.</li>
      </ul>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?fit=crop&w=800&q=80',
    title: 'Create Your Video Resume',
    description: (
      <ul>
        <li>Record professional video resumes</li>
        <li>Highlight key skills and experiences</li>
        <li>Showcase personality and communication</li>
        <li>Use templates for high-quality videos</li>
        <li>Easily share with employers</li>
      </ul>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1531497865144-0464c1c86f10?fit=crop&w=800&q=80',
    title: 'Get Personalized Job Recommendations',
    description: (
      <ul>
        <li>Tailored job suggestions</li>
        <li>Intelligent matching algorithm</li>
        <li>Targeted job alerts</li>
        <li>Discover matching roles</li>
        <li>Stay updated with new opportunities</li>
      </ul>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1554774853-d50f3791a3b1?fit=crop&w=800&q=80',
    title: 'Access Expert Career Advice',
    description: (
      <ul>
        <li>Tips on resume writing</li>
        <li>Interview preparation advice</li>
        <li>Career development workshops</li>
        <li>Salary negotiation strategies</li>
        <li>Guidance from industry experts</li>
      </ul>
    ),
  },
];

const Highlights = () => {
  return (
    <div className="highlights-main">
      <div className="highlights-article">
        {highlightsData.map((highlight, index) => (
          <div className="highlight-section" key={index}>
            <div className="highlight-item">
              <div className="highlight-image-container">
                <img src={highlight.image} alt={highlight.title} className="highlight-image" />
              </div>
              <div className="highlight-text-container">
                <h3>{highlight.title}</h3>
                {highlight.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
