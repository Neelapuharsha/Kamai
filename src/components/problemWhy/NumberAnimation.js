// import React from 'react';
// import CountUp from 'react-countup';

// const NumberAnimation = ({start,end,duration,suffix}) => {
//   return (
//     <h4 className="numbers d2">
//       <CountUp 
//         start={start} 
//         end={end} 
//         duration={duration} 
//         separator="," 
//         suffix={suffix} 
//       />
//     </h4>
//   );
// };
// export default NumberAnimation;
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const NumberAnimation = ({ start, end, duration, suffix, trigger }) => {
  const [countingStarted, setCountingStarted] = useState(false);

  useEffect(() => {
    if (trigger && !countingStarted) {
      setCountingStarted(true); // Start counting when trigger becomes true
    }
  }, [trigger, countingStarted]);

  return (
    <h4 className="numbers d2">
      {trigger && countingStarted ? (
        <CountUp
          start={parseFloat(start)}
          end={parseFloat(end)}
          duration={parseFloat(duration)}
          separator=","
          suffix={suffix}
        />
      ) : (
        <span>{start}{suffix}</span>
      )}
    </h4>
  );
};

export default NumberAnimation;


