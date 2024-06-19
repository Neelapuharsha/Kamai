// import why from '../problemWhy/why.css';
// import NumberAnimation from './NumberAnimation';
// import InfinityAnimation from './InfinityAnimation';
// import TypingAnimation from './typingAnimation';

// const Why = () => {
//   return (
//     <div className="why-container">
//       <div className='left'>
//         <div className='header-p'>
//           <h3 className='p3'>ABOUT US</h3>
//         </div>

//         <div className='headings-div'>
//           <h1>We are WebImpact, a</h1>
//           <h1>cutting-edge data</h1>
//           <h1>company that gets results</h1>   
//         </div>
        
//         <div className="paragraph-div">
//           {/* <p className='left__content__text'>We improve our clients' marketing results with a 
//             data-driven approach and we are hell-bent on making it awesome. 
//             Our goal is to create a new, data-oriented quality of 
//             e-commerce experience by leveraging powerful real-time analytics.
//           </p>  */}
//           <TypingAnimation />
//         </div>
//       </div>
//       <div className="about-right">
//             <div className="right-item">
//                 <h5 className="p3">clicks</h5>
//                 <h4 className="numbers d2"><span style={{ transform: 'none', opacity: 1 }}><NumberAnimation start="0"end="500" duration="10" suffix="M+" /></span></h4>
//             </div>
//             <div className="right-item">
//                 <h5 className="p3">conversions</h5>
//                 <h4 className="numbers d2"><span style={{ transform: 'none', opacity: 1 }}><NumberAnimation start="0"end="500" duration="10" suffix="K+" /></span></h4>
//             </div>
//             <div className="right-item">
//                 <h5 className="p3">our possibilities</h5>
//                 <h4 className="numbers d2"><span style={{ transform: 'none', opacity: 1 }}><InfinityAnimation /> </span></h4> 
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Why;


import React, { useState } from 'react';
import '../problemWhy/why.css'; // Import your existing CSS file
import NumberAnimation from './NumberAnimation';
import InfinityAnimation from './InfinityAnimation';
import TypingAnimation from './typingAnimation';
import AnimatedHeadings from './AnimatedHeadings';

const Why = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="why-container">
      <div className='left'>
        <div className='header-p'>
        <h3 className='p3'><span class="custom-bullet"></span> ABOUT US</h3>
        </div>

        <div className='headings-div'>
          {/* <h1 className="shiny-diamond">We are WebImpact, a</h1>
          <h1>cutting-edge data</h1>
          <h1>company that gets results</h1>    */}
          <AnimatedHeadings />
        </div>
        
        <div className="paragraph-div">
          <TypingAnimation />
        </div>
      </div>





    <div className={`right-container ${isHovered ? 'hovered' : ''}`}>
      <div className='about-right'>
        <div className="right-item">
          <h5 className="p3 right">number of migrations every year</h5>
          <h4 className="numbers d2">
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NumberAnimation start="0" end="8000" duration="10" suffix="K+" />
            </span>
          </h4>
        </div>
        <div className="right-item">
          <h5 className="p3 right">number of vacancies in job market</h5>
          <h4 className="numbers d2">
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NumberAnimation start="0" end="5710" duration="10" suffix="K+" />
            </span>
          </h4>
        </div>
        <div className="right-item">
          <h5 className="p3 right">our possibilities</h5>
          <h4 className="numbers d2">
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <InfinityAnimation />
            </span>
          </h4>
        </div>
      </div>
      {/* <div className={`right-right ${isHovered ? 'hovered' : ''}`}>
      </div> */}
    </div>

      
    </div>


    
  );
};

export default Why;
