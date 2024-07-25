import React from 'react';
import ViewButton from '../../buttons/viewbutton/ViewButton';
import '../locationcard/LocationCardTwo.css'; 

const LocationCardTwo = ({Title, Information}) => {
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

export default LocationCardTwo
