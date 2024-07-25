import React from 'react'
import ViewButton from '../../buttons/viewbutton/ViewButton'
import '../treatmentcard/TreatmentCard.css'


const TreatmentCard = ({information, title, src}) => {
  return (
    <div className='treatment-card'>
      <img {...src=""} alt="" />
      <h2>{title}</h2>
      <p>{information}</p>
      <ViewButton 
      information={"View Patient Journey"}
      />
    </div>
  )
}


export default TreatmentCard
