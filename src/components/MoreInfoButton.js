import React from 'react';
import { Link } from 'react-router-dom';

const MoreInfoButton = () => {
  return (
    <div className="control-buttons">
      <button className="btn btn-outline-light btn-lg">
        <Link to="/more-info">More info...</Link>
      </button>
    </div>
  );
};

export default MoreInfoButton;