// src/components/ui/input.jsx
import React from 'react';

export const Input = ({ value, onChange, placeholder, style, ...props }) => (
  <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{
      padding: '0.5rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      ...style
    }}
    {...props}
  />
);
