import React from 'react';
import './Highlights.css';
<<<<<<< HEAD
=======
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

>>>>>>> 838ea3f2bd1aa3cb14ed1824f7c75653c533ad54

const highlightsData = [
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&q=80',
    title: 'Search Your Job in Your Native Language',
    description: (
      <ul>
        <li>Job listings in multiple languages</li>
        <li>Easy navigation and application</li>
        <li>Language preference filters</li>
        <li>Localized job descriptions</li>
        <li>Supports English, Spanish, Mandarin, Hindi, etc.</li>
      </ul>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?fit=crop&w=800&q=80',
    title: 'Create Your Video Resume',
    description: (
      <ul>
        <li>Record professional video resumes</li>
        <li>Highlight key skills and experiences</li>
        <li>Showcase personality and communication</li>
        <li>Use templates for high-quality videos</li>
        <li>Easily share with employers</li>
      </ul>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1531497865144-0464c1c86f10?fit=crop&w=800&q=80',
    title: 'Get Personalized Job Recommendations',
    description: (
      <ul>
        <li>Tailored job suggestions</li>
        <li>Intelligent matching algorithm</li>
        <li>Targeted job alerts</li>
        <li>Discover matching roles</li>
        <li>Stay updated with new opportunities</li>
      </ul>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1554774853-d50f3791a3b1?fit=crop&w=800&q=80',
    title: 'Access Expert Career Advice',
    description: (
      <ul>
        <li>Tips on resume writing</li>
        <li>Interview preparation advice</li>
        <li>Career development workshops</li>
        <li>Salary negotiation strategies</li>
        <li>Guidance from industry experts</li>
      </ul>
    ),
  },
];

const Highlights = () => {
  return (
<<<<<<< HEAD
    <div className="highlights-main">
      <div className="highlights-article">
        {highlightsData.map((highlight, index) => (
          <div className="highlight-section" key={index}>
            <div className="highlight-item">
=======
    <div className="slick-arrow slick-next" onClick={onClick}>
      <span>&#8250;</span>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <span>&#8249;</span>
    </div>
  );
};

const Highlights = ({ highlights }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedHighlight, setSelectedHighlight] = useState(null);

  const openModal = (highlight) => {
    setSelectedHighlight(highlight);
    setModalIsOpen(true);
  };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   setSelectedHighlight(null);
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="highlights-section-wrapper">
      <div className="highlights-section">
        <Slider {...settings} className="highlights-slider">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
>>>>>>> 838ea3f2bd1aa3cb14ed1824f7c75653c533ad54
              <div className="highlight-image-container">
                <img src={highlight.image} alt={highlight.title} className="highlight-image" />
              </div>
              <div className="highlight-text-container">
                <h3>{highlight.title}</h3>
                {highlight.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
