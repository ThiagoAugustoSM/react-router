import React from 'react';

import { useHistory } from 'react-router-dom';

import * as ROUTES from '../constants/Routes';

import './ProductCard.css'

const ProductCard = (props) => {

  let history = useHistory();

  const goToProductScreen = (id='1234') => {
    history.push(`${ROUTES.PRODUCT_SCREEN}/${id}`);
  }

  return (
    <h1 className='productCard' onClick={() => goToProductScreen('1234')}>ProductCard</h1>
  )
}

export default ProductCard;