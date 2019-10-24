import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Bizarre Beijing</h1> 
        <div className="header__links">
          <NavLink to="/" 
            activeClassName="is-active header__animations"
            exact={true}
            >
            HOME
            </NavLink> 
          <NavLink to="/news" 
            activeClassName="is-active header__animations"
            >
            NEWS
            </NavLink>
          <NavLink to="/faq"
            activeClassName="is-active header__animations"
            >
            FAQ
            </NavLink>
          <NavLink to="/contact" 
            activeClassName="is-active header__animations"
            >
            CONTACT US
            </NavLink>
        </div>
      </div>
    )
  };
};

export default Header;