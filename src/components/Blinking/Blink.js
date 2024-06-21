// import React from 'react';
// import '../Blinking/Blink.css';

// const Blink = ({ text }) => {
//   return (
//     <div className="blink-header">
//       <h3 className="blink-p3">
//         <span className="custom-bullet-blink"></span> {text}
//       </h3>
//     </div>
//   );
// };

// export default Blink;





import React from 'react';
import '../Blinking/Blink.css';

const Blink = ({ text, textColor, blinkColor, position, top, left}) => {
  return (
    <div className="blink-header"style={{position:position,top:top,left:left}}>
      <h3 className="blink-p3" style={{ color: textColor}}>
        <span className="custom-bullet-blink" style={{ backgroundColor: blinkColor }}></span>
        <span className="blink-text">{text}</span>
      </h3>
    </div>
  );
};

export default Blink;

