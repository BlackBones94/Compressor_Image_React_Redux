import React from 'react';
import '../style/buttons.css';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button onClick={onClick} className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;