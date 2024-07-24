import React from 'react'
import './ViewButton.css'


const ViewButton = (props) => {
  return (
    <div className='ViewButton'>
      <h3>{props.information}</h3>
    </div>
  )
}

export default ViewButton
