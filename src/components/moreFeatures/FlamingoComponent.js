// 





import React from 'react';
import './FlamingoComponent.css';
import flamingoImage from './test.png';
import Button from '../Buttons/Button';

const FlamingoComponent = () => {
  return (
    <div className="flamingo-container">
      
      <div className='topLeft-btn'>
        <Button className="third-btn"  text='MORE OF PROJECT K FEATURES' />
      </div>
      <div className="content">
          <div className='text'>
          <h1>Project K</h1>
          <h1>helps you with</h1>
        </div>
        
        <div className="image">
          <img className='png-img' src={flamingoImage} alt="Project K helps you with" />
        </div>
      </div>
    

      <div className="list">
      <div className="left-column">
        <ul>
          <li>USA Substantial Presence Test and Physical Presence Test</li>
          <li>UK Statutory Residence Test</li>
          <li>EU Schengen Area tracking, 90 in 180 days rule</li>
        </ul>
      </div>
      <div className="right-column">
        <ul>
          <li>Malaysia residence status day counting</li>
          <li>South Africa physical presence rule</li>
          <li>Cyprus residency day counting</li>
        </ul>
      </div>
    </div>

        
    </div>
    
  );
};

export default FlamingoComponent;
