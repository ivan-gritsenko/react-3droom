import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors, onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    if (onColorSelect) {
      onColorSelect(color);
    }
  };

  return (
    <div className="color-picker">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`color-box ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;
