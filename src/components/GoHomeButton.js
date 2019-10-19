import React from 'react';
import { Link } from 'react-router-dom';

const GoHomeButton = () => {
  return (
    <div className="control-buttons">
      <button className="btn btn-outline-light btn-lg">
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};

export default GoHomeButton;