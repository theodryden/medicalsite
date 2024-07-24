import React from 'react';
import ViewButton from '../../buttons/viewbutton/ViewButton';
import '../locationcard/LocationCard.css'; 

const LocationCard = () => {
  return (
    <div className='card-container'>
        <h3>{}</h3>
        <p>{}</p>
        <ViewButton />
    </div>
  )
}

export default LocationCard
