import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="display-2">Bizarre Beijing</h1> 
        <div className="header__links">
          <NavLink to="/" 
            activeClassName="is-active"
            exact={true}
          >
            Home</NavLink> 
          <NavLink to="/news" 
            activeClassName="is-active"
          >
            News</NavLink>
          <NavLink to="/contact" 
            activeClassName="is-active"
          >
            Contact Us</NavLink>
        </div>
      </div>
    )
  };
};

export default Header;