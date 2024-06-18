import React from 'react';
import CountUp from 'react-countup';

const NumberAnimation = ({start,end,duration,suffix}) => {
  return (
    <h4 className="numbers d2">
      <CountUp 
        start={start} 
        end={end} 
        duration={duration} 
        separator="," 
        suffix={suffix} 
      />
    </h4>
  );
};
export default NumberAnimation;
