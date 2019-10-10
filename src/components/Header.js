import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
      <div className="header">
        <h1 className="display-2">Bizarre Beijing</h1> 
        <div className="header__links">
          <a href="/" className="nav-link">
            Home
          </a> 
          <a href="/news.html" className="nav-link">
            News
          </a>
          <a href="/contact_us.html" className="nav-link">
            Contact Us
          </a>
        </div>
      </div>
      </div>
    )
  };
};

export default Header;