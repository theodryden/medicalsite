import React from 'react';
import ViewButton from '../../buttons/viewbutton/ViewButton';
import '../locationcard/LocationCard.css'; 

const LocationCard = ({Title, Information}) => {
  return (
    <div className='card-container'>
        <h3>{Title}</h3>
        <p>{Information}</p>

        <ViewButton 
        information={"View information"}
        />
    </div>
  )
}

export default LocationCard
