import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import KamaiHead from './kamaiHead';

const AnimatedHeadings = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Trigger animation when component mounts
  }, []);

  const fadeIn = useSpring({
    opacity: show ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 4000 }
  });

  return (
    <div className="headings-div">
      <animated.h1 style={fadeIn}><KamaiHead /> envisions India as the</animated.h1>
      <animated.h1 style={fadeIn}>world's skill capital,fulfilling demands.</animated.h1>
    </div>
  );
};

export default AnimatedHeadings;
