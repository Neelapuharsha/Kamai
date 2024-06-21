import React, { useState, useEffect } from 'react';
import './OurTeams.css';
import shashi from './shashi.PNG';
import lokesh from './lokesh.png';
import pooja from './pooja1.png';
import varshitha from './varshitha.png';
import luna from './luna.png'; // Import additional photos as needed
import Mangootha from './mangootha.png';
import confetti from 'canvas-confetti';

const people = [
  {
    name: 'Shashi K',
    designation: 'CEO & Boss',
    about: 'Shashi is the driving force behind our company, leading with vision and dedication.',
    imgSrc: shashi
  },
  {
    name: 'Mangootha K',
    designation: 'The Lady Boss',
    about: 'Mangootha excels in strategic planning and operational excellence.',
    imgSrc: Mangootha
  },
  {
    name: 'Luna K',
    designation: 'Happiness Manager',
    about: 'Luna ensures a positive and vibrant work environment, making sure everyone is happy and motivated.',
    imgSrc: luna
  },
  {
    name: 'Lokesh P',
    designation: 'Project Manager',
    about: 'Lokesh is an expert in managing complex projects and delivering them on time.',
    imgSrc: lokesh
  },
  {
    name: 'Pooja RC',
    designation: 'Product Manager',
    about: 'Pooja brings creativity and precision to product development and management.',
    imgSrc: pooja
  },
  {
    name: 'Varshitha R',
    designation: 'Data Scientist',
    about: 'Varshitha specializes in data analysis, transforming data into actionable insights.',
    imgSrc: varshitha
  }
];

const OurTeams = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotateClass, setRotateClass] = useState('');

  useEffect(() => {
    if (rotateClass) {
      const timer = setTimeout(() => setRotateClass(''), 500); // Duration should match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [rotateClass]);

  const handleNext = () => {
    setRotateClass('rotate-enter');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
      setTimeout(() => setRotateClass(''), 300); // Ensure rotate class is removed after changing index
    }, 300); // Half of the transition duration to start changing the background image
  };

  const handlePrev = () => {
    setRotateClass('rotate-exit');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
      setTimeout(() => setRotateClass(''), 300); // Ensure rotate class is removed after changing index
    }, 300); // Half of the transition duration to start changing the background image
  };

  const handleCardClick = (person) => {
    console.log(person);
    if (person.name === 'Shashi K') {
      confetti({
        particleCount: 400,
        spread: 100,
      });
    }
  };

  const visiblePeople = [
    people[(currentIndex - 2 + people.length) % people.length],
    people[(currentIndex - 1 + people.length) % people.length],
    people[currentIndex],
    people[(currentIndex + 1) % people.length],
    people[(currentIndex + 2) % people.length],
  ];

  const currentPerson = people[currentIndex];
  const backgroundPosition = currentPerson.name === 'Mangootha K' || currentPerson.name === 'Luna K' ? 'center' : 'top';

  return (
    <div className="ot-floating-bar-wrapper">
      <div
        className={`ot-background-container ${rotateClass}`}
        style={{ backgroundImage: `url(${currentPerson.imgSrc})`, backgroundPosition }}
      ></div>
      <div className="ot-floating-bar">
        <button className="ot-scroll-button ot-left" onClick={handlePrev}>
          <i className="fas fa-chevron-circle-left"></i>
        </button>
        {visiblePeople.map((person, index) =>
          index === 2 ? (
            <div key={index} className="ot-card" onClick={() => handleCardClick(person)}>
              <img
                src={person.imgSrc}
                alt={person.name}
                className={person.name === 'Mangootha K' || person.name === 'Luna K' ? 'ot-centered-img' : 'ot-top-img'}
              />
              <div className="ot-card-content">
                <h3>{person.name}</h3>
                <h4>{person.designation}</h4>
                <p>{person.about}</p>
              </div>
            </div>
          ) : (
            <div key={index} className={`ot-circle ${index === 2 ? 'active' : ''}`}>
              <img
                src={person.imgSrc}
                alt={person.name}
                className={person.name === 'Mangootha K' || person.name === 'Luna K' ? 'ot-centered-img' : 'ot-top-img'}
              />
            </div>
          )
        )}
        <button className="ot-scroll-button ot-right" onClick={handleNext}>
          <i className="fas fa-chevron-circle-right"></i>
        </button>
      </div>
      <div className="ot-background-overlay ot-background-text">{currentPerson.name}</div>
    </div>
  );
};

export default OurTeams;
