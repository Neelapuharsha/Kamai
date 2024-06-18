import React, { useEffect, useRef } from 'react';
import './Sphere.css';

const Sphere = () => {
  const ballRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const ball = ballRef.current;
      const rect = ball.getBoundingClientRect();
      const x = event.clientX - rect.left; // x position within the element
      const y = event.clientY - rect.top;  // y position within the element

      const moveX = (x - rect.width / 2) / rect.width * 2; // range: -1 to 1
      const moveY = (y - rect.height / 2) / rect.height * 2; // range: -1 to 1

      // Adjust the light positions
      const light1X = -50 + moveX * 50;
      const light1Y = -50 + moveY * 50;
      const light2X = -30 - moveX * 30;
      const light2Y = -30 - moveY * 30;

      ball.style.setProperty('--light1X', `${light1X}px`);
      ball.style.setProperty('--light1Y', `${light1Y}px`);
      ball.style.setProperty('--light2X', `${light2X}px`);
      ball.style.setProperty('--light2Y', `${light2Y}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="ball" ref={ballRef}>
      <span className="letter">K</span>
    </div>
  );
};

export default Sphere;
