


// import React, { useState } from 'react';
// import '../problemWhy/why.css'; // Import your existing CSS file
// import NumberAnimation from './NumberAnimation';
// import InfinityAnimation from './InfinityAnimation';
// import TypingAnimation from './typingAnimation';
// import AnimatedHeadings from './AnimatedHeadings';

// const Why = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="why-container">
//       <div className='left'>
//         <div className='header-p'>
//         <h3 className='p3'><span class="custom-bullet"></span> WHY US</h3>
//         </div>

//         <div className='headings-div'>
//           {/* <h1 className="shiny-diamond">We are WebImpact, a</h1>
//           <h1>cutting-edge data</h1>
//           <h1>company that gets results</h1>    */}
//           <AnimatedHeadings />
//         </div>
        
//         <div className="paragraph-div">
//           <TypingAnimation />
//         </div>
//       </div>





//     <div className={`right-container ${isHovered ? 'hovered' : ''}`}>
//       <div className='about-right'>
//         <div className="right-item">
//           <h5 className="p3 right">number of migrations every year</h5>
//           <h4 className="numbers d2">
//             <span
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <NumberAnimation start="0" end="8000" duration="20" suffix="K+" />
//             </span>
//           </h4>
//         </div>
//         <div className="right-item">
//           <h5 className="p3 right">number of vacancies in job market</h5>
//           <h4 className="numbers d2">
//             <span
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <NumberAnimation start="0" end="5710" duration="20" suffix="K+" />
//             </span>
//           </h4>
//         </div>
//         <div className="right-item">
//           <h5 className="p3 right">our possibilities</h5>
//           <h4 className="numbers d2">
//             <span
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <InfinityAnimation />
//             </span>
//           </h4>
//         </div>
//       </div>
//       {/* <div className={`right-right ${isHovered ? 'hovered' : ''}`}>
//       </div> */}
//     </div>

      
//     </div>


    
//   );
// };

// export default Why;

// import React, { useEffect, useState } from 'react';
// import '../problemWhy/why.css'; // Import your existing CSS file
// import NumberAnimation from './NumberAnimation';
// import InfinityAnimation from './InfinityAnimation';
// import TypingAnimation from './typingAnimation';
// import AnimatedHeadings from './AnimatedHeadings';

// const Why = ({ trigger }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (!trigger) {
//       // Reset any states or animations if necessary when out of view
//       setIsHovered(false);
//     }
//   }, [trigger]);

//   return (
//     <div className="why-container">
//       <div className='left'>
//         <div className='header-p'>
//           <h3 className='p3'><span className="custom-bullet"></span> WHY US</h3>
//         </div>

//         <div className='headings-div'>
//           <AnimatedHeadings />
//         </div>
        
//         <div className="paragraph-div">
//           <TypingAnimation trigger={trigger} />
//         </div>
//       </div>

//       <div className={`right-container ${isHovered ? 'hovered' : ''}`}>
//         <div className='about-right'>
//           <div className="right-item">
//             <h5 className="p3 right">number of migrations every year</h5>
//             <h4 className='numbers d2'>
//             <span
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//              {trigger && <NumberAnimation start="0" end="8000" duration="20" suffix="K+" />}
//             </span>
//             </h4>
//           </div>
//           <div className="right-item">
//             <h5 className="p3 right">number of vacancies in job market</h5>
//             <h4 className='numbers d2'>
//             <span
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               {trigger &&<NumberAnimation start="0" end="5710" duration="20" suffix="K+" />}
//             </span>
//             </h4>
//           </div>
//           <div className="right-item">
//             <h5 className="p3 right">our possibilities</h5>
//             <h4 className='numbers d2'>
//             <span
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <InfinityAnimation trigger={trigger} />
//             </span>
//             </h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Why;
import React, { useEffect, useState } from 'react';
import '../problemWhy/why.css'; // Import your existing CSS file
import NumberAnimation from './NumberAnimation';
import InfinityAnimation from './InfinityAnimation';
import TypingAnimation from './typingAnimation';
import AnimatedHeadings from './AnimatedHeadings';

const Why = ({ trigger }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!trigger) {
      // Reset any states or animations if necessary when out of view
      setIsHovered(false);
    }
  }, [trigger]);

  return (
    <div className="why-container">
      <div className='left'>
        <div className='header-p'>
          <h3 className='p3'><span className="custom-bullet"></span> WHY US</h3>
        </div>

        <div className='headings-div'>
          <AnimatedHeadings />
        </div>
        
        <div className="paragraph-div">
          <TypingAnimation trigger={trigger} />
        </div>
      </div>

      <div className={`right-container ${isHovered ? 'hovered' : ''}`}>
        <div className='about-right'>
          <div className="right-item">
            <h5 className="p3 right">number of migrations every year</h5>
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NumberAnimation start="0" end="8000" duration="20" suffix="K+" trigger={trigger} />
            </span>
          </div>
          <div className="right-item">
            <h5 className="p3 right">number of vacancies in job market</h5>
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NumberAnimation start="0" end="5710" duration="20" suffix="K+" trigger={trigger} />
            </span>
          </div>
          <div className="right-item">
            <h5 className="p3 right">our possibilities</h5>
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <InfinityAnimation trigger={trigger} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
