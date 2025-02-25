// src/components/ui/label.jsx
import React from 'react';

export const Label = ({ children, htmlFor, style, ...props }) => (
  <label
    htmlFor={htmlFor}
    style={{
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
      ...style
    }}
    {...props}
  >
    {children}
  </label>
);
