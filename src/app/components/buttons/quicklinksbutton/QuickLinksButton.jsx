import React from 'react';
import './QuickLinksButton.css';

const QuickLinksButton = ({ information }) => {
  return (
    <h3 className="quick-links-button">
      {information}
    </h3>
  );
}

export default QuickLinksButton;
