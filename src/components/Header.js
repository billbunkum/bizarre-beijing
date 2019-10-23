import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Bizarre Beijing</h1> 
        <div className="header__links">
          <NavLink to="/" 
            activeClassName="is-active"
            exact={true}
            >
            HOME
            </NavLink> 
          <NavLink to="/news" 
            activeClassName="is-active"
            >
            NEWS
            </NavLink>
          <NavLink to="#"
            activeClassName="is-active"
            >
            EVENTS
            </NavLink>
          <NavLink to="/contact" 
            activeClassName="is-active"
            >
            CONTACT US
            </NavLink>
        </div>
      </div>
    )
  };
};

export default Header;