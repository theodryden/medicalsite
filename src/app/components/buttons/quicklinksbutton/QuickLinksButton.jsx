import React from 'react';
import './QuickLinksButton.css';

const QuickLinksButton = ({ information }) => {
  return (
    <div className="quick-links-button">
      <h3>{information}</h3>
    </div>
  );
}

export default QuickLinksButton;
