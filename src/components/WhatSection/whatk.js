import React, { useState } from 'react';
import './Whatk.css';
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import Blink from '../Blinking/Blink';

const Whatk = () => {
  const [active, setActive] = useState(0);
  const sections = [
    {
      title: "About Us",
      description: `We are a dedicated blue-collar job portal, providing opportunities for individuals who may not have formal education but possess valuable skills and experience. Our platform connects job seekers with employers looking for reliable and hardworking candidates.`,
      background: '#f1f6fb',
      image: image1 // Add image URL
    },
    {
      title: "Mission",
      description: `Our mission is to bridge the gap between employers and blue-collar workers by offering a user-friendly platform that caters to the unique needs of this workforce. We strive to empower job seekers by providing resources and support to enhance their employability.`,
      background: "linear-gradient(to right, #b3e0ff, #c6e9ff)",
      image: image2 // Add image URL
    },
    {
      title: "Vision",
      description: `Our vision is to become the leading job portal for blue-collar workers, ensuring that every skilled individual has access to meaningful employment opportunities, regardless of their educational background.`,
      background: "linear-gradient(to right, #c6e9ff, #e0f2ff)",
      image: image3 // Add image URL
    },
    {
      title: "Values",
      description: `Integrity, respect, and inclusivity are at the core of our services. We are committed to providing a platform that respects the dignity of labor and values the contributions of blue-collar workers.`,
      background: "linear-gradient(to right, #e0f2ff, #f0f8ff)",
      image: image4 // Add image URL
    }
  ];

  return (
    
    <ul className="whatk-list">
      <h5><Blink text="ABOUT KamAi" textColor="black" blinkColor="black" /></h5>
      {sections.map((section, i) => (
        <li
          key={i}
          className={`whatk-item ${active === i ? 'active' : ''}`}
          style={{ background: section.background }}
          role="button"
          onClick={() => setActive(i)}
        >
          <h3 className="whatk-title">{section.title}</h3>
          <div className="section-content">
            <div className="inner">
              <div className="bio">
                <h2 className="bio-title">{section.title}</h2>
                <p className="bio-description">{section.description}</p>
              </div>
              {active === i && (
                <img src={section.image} alt={section.title} className="section-image" />
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Whatk;
