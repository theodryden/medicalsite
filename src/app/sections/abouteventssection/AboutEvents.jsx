import React from 'react';
import ViewButton from '../../components/buttons/viewbutton/ViewButton';
import './AboutEvents.css'; // Make sure this import path is correct

const AboutEvents = () => {
  return (
    <div className="container">
      <div className="container-cardOne">
        <img src="../ladyHospital.jpg" alt="Dryden Medicine" /> {/* Added alt attribute for accessibility */}
        <h3>Who is Dryden Medicine?</h3>
        <p>We're the leading provider of patient services</p> {/* Fixed typo "prodiver" to "provider" */}
        <ViewButton information="About Dryden Medicine" />
      </div>
      <div className="container-cardTwo">
        <img src="../hospitalLobby.jpg" alt="Hospital Lobby" /> {/* Added alt attribute for accessibility */}
        <h3>Latest news and events</h3>
        <p>We're the leading provider of patient services</p> {/* Fixed typo "prodiver" to "provider" */}
        <ViewButton information="View all posts" />
      </div>
    </div>
  );
};

export default AboutEvents;
