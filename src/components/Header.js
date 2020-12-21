import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="flex align-center space-between header">
    <h2>Math Magicians</h2>
    <nav className="flex space-around links">
      <NavLink
        exact
        className="flex center link"
        activeClassName="active"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="flex center link"
        activeClassName="active"
        to="/quote"
      >
        Quote
      </NavLink>
      <NavLink
        className="flex center link"
        activeClassName="active"
        to="/calculator"
      >
        Calcultor
      </NavLink>
    </nav>
  </div>
);

export default Header;
