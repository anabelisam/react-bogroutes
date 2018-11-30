import React from 'react';

const Input = ({ type, name, label, placeholder }) => (
  <div className="Login-input">
    <label htmlFor={type}>{label}</label>
    <input name={name} type={type} placeholder={placeholder} />
  </div>
);

export default Input;