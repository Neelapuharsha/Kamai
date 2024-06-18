import React from 'react';
import "./Input.css";

const Input =  ({ label, name, type = 'text', value, onChange, placeholder = '' }) => {
    return (
      <div className="custom-input">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  };
  
  export default Input