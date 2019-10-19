import React from 'react';
import GoHomeButton from './GoHomeButton.js';

class PageNotFound extends React.Component {
  render() {
    const message = {
      english: "Oops! Page not found.",
      chinese: "倒霉！网站找不到了" 
    };
    return (
      <div className="main-content">
        <div className="page-not-found">
          <div className="page-not-found__headlines">
            <h3>{message.english}</h3> 
            <h3>{message.chinese}</h3>
          </div>
          <div className="page-not-found__button">
            <GoHomeButton />
          </div>
        </div>
      </div>
    );
  };
};

export default PageNotFound;