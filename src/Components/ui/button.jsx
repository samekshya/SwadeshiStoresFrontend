
import React from 'react';

export const Button = ({ children, onClick, style, ...props }) => (
  <button
    onClick={onClick}
    style={{
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#007BFF',
      color: '#fff',
      cursor: 'pointer',
      ...style
    }}
    {...props}
  >
    {children}
  </button>
);
