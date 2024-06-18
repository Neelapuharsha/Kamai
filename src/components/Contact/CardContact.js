import React from 'react'
import "./CardContact.css"

const CardContact = (props) => {
    const { imageSrc, title, subContent } = props;
    const formattedSubContent = subContent.split('\n').map((line, index) => (
      <span key={index} className='sub_content_line'>{line}</span>
  ));
  
    return (
      <div className='card_div'>
        <div className='icon_div'>
          <img src={imageSrc} alt='icon' className='icon'/>
        </div>
        <div className='content'>
          <h2 className='title'>{title}</h2>
          <p className='sub_content'>{formattedSubContent}</p>
        </div>
      </div>
    );
  }
  
  export default CardContact;