import React from 'react';
import { Link } from 'react-router-dom';

const MoreInfoButton = (props) => {
  const URL = "/more-info/" + props.eventIndex;

  return (
    <div className="control-buttons">
      <button className="btn btn-outline-light btn-lg">
        <Link to={URL}>More info...</Link>
      </button>
    </div>
  );
};

export default MoreInfoButton;