import React from 'react';

const Input = ({ type, name, label, placeholder, onChange }) => (
  <div className="Login-input">
    <label htmlFor={type}>{label}</label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default Input;