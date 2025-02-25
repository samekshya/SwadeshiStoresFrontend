// src/components/ui/switch.jsx
import React from 'react';

export const Switch = ({ checked, onChange, style, ...props }) => {
  const switchContainer = {
    position: 'relative',
    display: 'inline-block',
    width: '40px',
    height: '20px',
    ...style
  };

  const sliderStyle = {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: checked ? '#4CAF50' : '#ccc',
    transition: '.4s',
    borderRadius: '20px'
  };

  const circleStyle = {
    position: 'absolute',
    height: '16px',
    width: '16px',
    left: checked ? '22px' : '4px',
    bottom: '2px',
    backgroundColor: 'white',
    transition: '.4s',
    borderRadius: '50%'
  };

  return (
    <label style={switchContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ display: 'none' }}
        {...props}
      />
      <div style={sliderStyle}>
        <div style={circleStyle}></div>
      </div>
    </label>
  );
};
