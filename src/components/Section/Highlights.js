import React, { useState } from 'react';
import Slider from 'react-slick';
import './Highlights.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'react-modal';

const NextArrow = ({ onClick }) => {
  return (
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

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedHighlight(null);
  };

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
              <div className="highlight-image-container">
                <img src={highlight.image} alt={highlight.title} className="highlight-image" />
              </div>
              <div className="highlight-text-container">
                <h3>{highlight.title}</h3>
                {highlight.description}
                <button onClick={() => openModal(highlight)} className="learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Highlight Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedHighlight && (
          <div className="modal-content">
            <h2>{selectedHighlight.title}</h2>
            <p>{selectedHighlight.details}</p>
            <button onClick={closeModal} className="close-modal-btn">Close</button>
          </div>
        )}
      </Modal> */}
    </div>
  );
};

export default Highlights;
