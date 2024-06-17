import React from 'react';
import "./TextArea.css";

const TextArea = ({ label, name, value, onChange, placeholder = '' }) => {
    return (
      <div className="custom-textarea">
        {label && <label htmlFor={name}>{label}</label>}
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  };
  

export default TextArea