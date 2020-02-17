import React from 'react';

import { Link, NavLink, useHistory } from 'react-router-dom';

import './Header.css';

import * as ROUTES from '../constants/Routes';

const Header = (props) => {

  let history = useHistory();

  const goToHome = () => {
    history.push(ROUTES.HOME_SCREEN);
  }

  return (
    <div onClick={goToHome} className='logo'>
      <h1>Platzi Store</h1>
    </div>
  )
}

export default Header;