import why from '../problemWhy/why.css';
import NumberAnimation from './NumberAnimation';
import InfinityAnimation from './InfinityAnimation';
import TypingAnimation from './typingAnimation';

const Why = () => {
  return (
    <div className="why-container">
      <div className='left'>
        <div className='header-p'>
          <h3 className='p3'>ABOUT US</h3>
        </div>

        <div className='headings-div'>
          <h1>We are WebImpact, a</h1>
          <h1>cutting-edge data</h1>
          <h1>company that gets results</h1>   
        </div>
        
        <div className="paragraph-div">
          {/* <p className='left__content__text'>We improve our clients' marketing results with a 
            data-driven approach and we are hell-bent on making it awesome. 
            Our goal is to create a new, data-oriented quality of 
            e-commerce experience by leveraging powerful real-time analytics.
          </p>  */}
          <TypingAnimation />
        </div>
      </div>
      <div className="about-right">
            <div className="right-item">
                <h5 className="p3">clicks</h5>
                <h4 className="numbers d2"><span style={{ transform: 'none', opacity: 1 }}><NumberAnimation start="0"end="500" duration="10" suffix="M+" /></span></h4>
            </div>
            <div className="right-item">
                <h5 className="p3">conversions</h5>
                <h4 className="numbers d2"><span style={{ transform: 'none', opacity: 1 }}><NumberAnimation start="0"end="500" duration="10" suffix="K+" /></span></h4>
            </div>
            <div className="right-item">
                <h5 className="p3">our possibilities</h5>
                <h4 className="numbers d2"><span style={{ transform: 'none', opacity: 1 }}><InfinityAnimation /> </span></h4> 
            </div>
        </div>
    </div>
  );
};

export default Why;
