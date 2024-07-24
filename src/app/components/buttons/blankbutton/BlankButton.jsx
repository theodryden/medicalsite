import React from 'react';
import './BlankButton.css'; // Import the CSS file for styling

const BlankButton = ({ title }) => {
  return (
    <div className="blank-button">
      <h3>{title}</h3>
    </div>
  );
}

export default BlankButton;
