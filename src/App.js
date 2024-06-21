


// import React, { useState } from 'react';
// import './App.css';
// import Section from './components/Section/Section';
// import Header1 from './components/Header/Header1';
// import Footer from './components/Footer/Footer';
// import HeroSection from './components/Landing page/HeroSection';
// import Contact from './components/Contact/Contact';
// import Highlights from './components/Section/Highlights';
// import Why from './components/problemWhy/why';

// import SplineViewer from './components/Footer/SplineViewer';
// import Whatk from './components/WhatSection/whatk';

// function App() {
//   const [whyVisible, setWhyVisible] = useState(false);

//   return (
//     <div className="App">
//       <Header1 />

//       <Section
//         borderTopRightRadius="0px"
//         borderTopLeftRadius="0px"
//         onVisible={() => { }}
//       >
//         <HeroSection />
//       </Section>
//       <Section
//         backgroundImage="linear-gradient(45deg, #00c6ff, #0072ff)"
//         borderTopRightRadius="40px"
//         borderTopLeftRadius="40px"
//         onVisible={(visible) => setWhyVisible(visible)}
//       >
//         <Why trigger={whyVisible} />
//       </Section>
//       <Section

//         backgroundColor="#f1f6fb"
//         borderTopRightRadius="40px"
//         borderTopLeftRadius="40px"
//         onVisible={() => { }}
//       >
//         <Whatk />
//       </Section>
//       <Section
//         backgroundImage="linear-gradient(45deg, #00c6ff, #0072ff)"
//         backgroundColor="#f1f6fb"
//         borderTopRightRadius="40px"
//         borderTopLeftRadius="40px"
//         onVisible={() => { }}
//       >
//         <Highlights />
//       </Section>

//       <Section
//         backgroundColor="#fff"
//         borderTopRightRadius="40px"
//         borderTopLeftRadius="40px"
//         onVisible={() => { }}
//       >
//         <Contact />
//       </Section>




//       <Section
//         backgroundColor="#111"
//         borderTopRightRadius="40px"
//         borderTopLeftRadius="40px"
//         onVisible={() => { }}
//       >




//         <SplineViewer />
//       </Section>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Section from './components/Section/Section';
import Header1 from './components/Header/Header1';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Landing page/HeroSection';
import Contact from './components/Contact/Contact';
import Highlights from './components/Section/Highlights';
import Why from './components/problemWhy/why';

import SplineViewer from './components/Footer/SplineViewer';
import Whatk from './components/WhatSection/whatk';
import OurTeams from './components/FloatingBar/OurTeams';

function App() {
  const [whyVisible, setWhyVisible] = useState(false);

  return (
    <div className="App">
      <Header1 />

      <Section
        backgroundColor="#fff"
        borderTopRightRadius="0px"
        borderTopLeftRadius="0px"
        onVisible={() => { }}
      >
        <HeroSection />
      </Section>
<<<<<<< Updated upstream
=======
  
      <Section
        backgroundColor="#f1f6fb"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
        onVisible={() => {}}
      >
        <Highlights/>
      </Section>
      
      <Section
        backgroundColor="#f1f6fb"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
        onVisible={() => {}}
      >
        <Contact />
      </Section>

>>>>>>> Stashed changes
      <Section
        id="why"
        backgroundImage="linear-gradient(45deg, #00c6ff, #0072ff)"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
        onVisible={(visible) => setWhyVisible(visible)}
      >
        <Why trigger={whyVisible} />
      </Section>
      <Section

        backgroundColor="#fff"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
        onVisible={() => { }}
      >
        <Whatk />
      </Section>
      <Section
        id="highlights"
        backgroundImage="linear-gradient(45deg, #00c6ff, #0072ff)"
        backgroundColor="#f1f6fb"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
        onVisible={() => { }}
      >
        <Highlights />
      </Section>
      <Section
        // "#f1f6fb"
        backgroundColor="#fff"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
        onVisible={() => { }}
      >
        <OurTeams />
      </Section>

      <Section
        id="contact"
        backgroundColor="#fff"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
        onVisible={() => { }}
      >
        <Contact />
      </Section>
      <Section
        id="spline"
        backgroundColor="#111"
        borderTopRightRadius="40px"
        borderTopLeftRadius="40px"
        onVisible={() => { }}
      >
        <SplineViewer />
      </Section>
    </div>
  );
}

export default App;
