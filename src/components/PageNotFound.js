import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component {
  render() {
    const message = {
      english: "Oops! Page not found.",
      chinese: "倒霉！网站找不到了" 
    };
    return (
      <div className="main-content">
        <div className="page-not-found">
          <h3>{message.english}</h3> 
          <h3>{message.chinese}</h3>
          <div className="control-buttons page-not-found__buttons">
            <button className="btn btn-outline-light btn-lg">
              <Link to="/">Back Home</Link>
            </button>
          </div>
        </div>
      </div>
    );
  };
};

export default PageNotFound;