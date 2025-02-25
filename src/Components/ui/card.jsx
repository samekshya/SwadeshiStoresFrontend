
import React from 'react';

export const Card = ({ children, style, ...props }) => (
  <div
    style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);

export const CardContent = ({ children, style, ...props }) => (
  <div
    style={{
      margin: '1rem',
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);
