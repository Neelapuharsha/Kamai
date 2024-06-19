// import React, { useState, useEffect } from 'react';
// const TypingAnimation = ({ speed = 70 }) => {
//   const [displayedText, setDisplayedText] = useState('');
//   const text = "We improve our clients' marketing results with a data-driven approach and we are hell-bent on making it awesome. Our goal is to create a new, data-oriented quality of e-commerce experience by leveraging powerful real-time analytics.";
//   useEffect(() => {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       if (index < text.length) {
//         setDisplayedText(text.slice(0, index + 1));
//         index++;
//       } else {
//         clearInterval(intervalId);
//       }
//     }, speed);
//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, [text, speed]);
//   return <p className='left__content__text'>{displayedText}</p>;
// };
// export default TypingAnimation;




import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ speed = 70, cursorBlinkSpeed = 500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const text =
    "We improve our clients' marketing results with a data-driven approach and we are hell-bent on making it awesome. Our goal is to create a new, data-oriented quality of e-commerce experience by leveraging powerful real-time analytics.";

  useEffect(() => {
    let index = 0;
    const typingIntervalId = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typingIntervalId);
        setShowCursor(false); // Hide cursor after typing is complete
      }
    }, speed);
    return () => clearInterval(typingIntervalId); // Clean up the interval on component unmount
  }, [text, speed]);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const cursorIntervalId = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }, cursorBlinkSpeed);
      return () => clearInterval(cursorIntervalId); // Clean up the interval on component unmount
    }
  }, [displayedText, text.length, cursorBlinkSpeed]);

  return (
    <p className="left__content__text">
      {displayedText}
      {showCursor && <span style={{ fontWeight: 'bold', opacity: 0.5 }}>█</span>}
    </p>
  );
};

export default TypingAnimation;
