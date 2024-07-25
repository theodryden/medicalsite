import React from 'react';
import './ViewButton.css';


const ViewButton = ({information}) => {
  return (
    <div className='ViewButton'>
      <h2>{information}</h2>
    </div>
  )
}

export default ViewButton
