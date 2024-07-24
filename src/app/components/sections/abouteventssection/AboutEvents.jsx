import React from 'react';
import ViewButton from '../../buttons/viewbutton/ViewButton';
import './AboutEvents.css'

const AboutEvents = () => {
  return (
    <div className='container'>
        <div className='container-cardOne'>
            <img src='../ladyHospital.jpg'></img>
            <h3>Who is Dryden Medicine?</h3>
            <p>We're the leading prodiver of patient services</p>
            <ViewButton information="About Dryden Medicine" />
        </div>
        <div className='container-cardTwo'>
            <img src='../hospitalLobby.jpg'></img>
            <h3>Latest news and events</h3>
            <p>We're the leading prodiver of patient services</p>
            <ViewButton information="View all posts" />
        </div>
    </div>
  )
}

export default AboutEvents
