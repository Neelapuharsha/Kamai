import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedHeadings = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Trigger animation when component mounts
  }, []);

  const fadeIn = useSpring({
    opacity: show ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 7000 }
  });

  return (
    <div className="headings-div">
      <animated.h1 style={fadeIn}>We are WebImpact, a</animated.h1>
      <animated.h1 style={fadeIn}>cutting-edge data</animated.h1>
      <animated.h1 style={fadeIn}>company that gets results</animated.h1>
    </div>
  );
};

export default AnimatedHeadings;
