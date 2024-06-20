// import React from 'react';
// import './Section.css';

// const Section = ({ backgroundImage, backgroundColor, borderTopRightRadius, borderTopLeftRadius, children }) => {
//   return (
//     <section 
//       className="section" 
//       style={{ 
//         backgroundImage,
//         backgroundColor, 
//         borderTopRightRadius, 
//         borderTopLeftRadius 
//       }}
//     >
//       {children} {/* Render children */}
//     </section>
//   );
// };

// export default Section;
import React, { useEffect, useRef } from 'react';
import './Section.css';

const Section = ({ 
  backgroundImage, 
  backgroundColor, 
  borderTopRightRadius, 
  borderTopLeftRadius, 
  children,
  onVisible 
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(true);
        } else {
          onVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onVisible]);

  return (
    <section 
      ref={sectionRef}
      className="section" 
      style={{ 
        backgroundImage,
        backgroundColor, 
        borderTopRightRadius, 
        borderTopLeftRadius 
      }}
    >
      {children} {/* Render children */}
    </section>
  );
};

export default Section;
