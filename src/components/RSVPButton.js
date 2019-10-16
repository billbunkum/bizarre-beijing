import React from 'react';
import { Link } from 'react-router-dom';  
      
const RSVPButton = () => {
  return (
    <div className="control-buttons">
      <button className="btn btn-outline-light btn-lg">
        <Link to="/contact">RSVP Here</Link>
      </button>
    </div>
  );
};

export default RSVPButton;