// import React, { useState } from 'react';
// import CountUp from 'react-countup';

// const InfinityAnimation = () => {
//   const [showInfinity, setShowInfinity] = useState(false);

//   const handleEnd = () => {
//     setShowInfinity(true); // Show the infinity symbol after count ends
//   };

//   return (
//     <h4 className="numbers d2">
//       {showInfinity ? (
//         <span>∞</span>
//       ) : (
//         <CountUp
//           start={0}
//           end={100000000}
//           duration={20}
//           separator=","
//           suffix="+"
//           onEnd={handleEnd}
//         />
//       )}
//     </h4>
//   );
// };

// export default InfinityAnimation;

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const InfinityAnimation = ({ trigger }) => {
  const [showInfinity, setShowInfinity] = useState(false);

  const handleEnd = () => {
    setShowInfinity(true); // Show the infinity symbol after count ends
  };

  useEffect(() => {
    if (!trigger) {
      setShowInfinity(false); // Reset to not show infinity when out of view
    }
  }, [trigger]);

  return (
    <h4 className="numbers d2">
      {showInfinity ? (
        <span>∞</span>
      ) : (
        trigger && (
          <CountUp
            start={0}
            end={100000000}
            duration={20}
            separator=","
            suffix="+"
            onEnd={handleEnd}
          />
        )
      )}
    </h4>
  );
};

export default InfinityAnimation;
