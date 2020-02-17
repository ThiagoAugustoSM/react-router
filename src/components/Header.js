import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  return (
    <NavLink exact to='/' activeClassName='link-platzi'>
      <h1>Platzi Store</h1>
    </NavLink>
  )
}

export default Header;