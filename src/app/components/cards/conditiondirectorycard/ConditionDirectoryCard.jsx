import React from 'react';
import BlankButton from '../../buttons/blankbutton/BlankButton';
import './ConditionDirectoryCard.css'; // Import the CSS file for styling

const ConditionDirectoryCard = (props) => {
  return (
    <div className='condition-directory-card-container'>
      <h3>Cataract Directory</h3>
      <p>Frequently asked questions by patients</p>
      <BlankButton title='A - Z Resources'/>
    </div>
  );
}

export default ConditionDirectoryCard;
