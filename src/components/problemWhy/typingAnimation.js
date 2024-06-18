// import React, { useState, useEffect } from 'react';

// const TypingAnimation = ({ speed = 50 }) => {
//   const [displayedText, setDisplayedText] = useState('');
//   const text = "We improve our clients' marketing results with a data-driven approach and we are hell-bent on making it awesome. Our goal is to create a new, data-oriented quality of e-commerce experience by leveraging powerful real-time analytics.";

//   useEffect(() => {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       if (index < text.length) {
//         setDisplayedText((prev) => prev + text[index]);
//         index++;
//       } else {
//         clearInterval(intervalId);
//       }
//     }, speed); // Adjust the speed of the typing effect by changing the interval duration

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, [text, speed]);

//   return <p className='left__content__text'>{displayedText}</p>;
// };

// export default TypingAnimation;
import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const text = "We improve our clients' marketing results with a data-driven approach and we are hell-bent on making it awesome. Our goal is to create a new, data-oriented quality of e-commerce experience by leveraging powerful real-time analytics.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [text, speed]); // Ensure effect runs once

  return <p className='left__content__text'>{displayedText}</p>;
};

export default TypingAnimation;
