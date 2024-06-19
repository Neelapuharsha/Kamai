import React, { useState } from 'react';
import CountUp from 'react-countup';

const InfinityAnimation = () => {
  const [showInfinity, setShowInfinity] = useState(false);

  const handleEnd = () => {
    setShowInfinity(true); // Show the infinity symbol after count ends
  };

  return (
    <h4 className="numbers d2">
      {showInfinity ? (
        <span>∞</span>
      ) : (
        <CountUp
          start={0}
          end={100000000}
          duration={20}
          separator=","
          suffix="+"
          onEnd={handleEnd}
        />
      )}
    </h4>
  );
};

export default InfinityAnimation;
