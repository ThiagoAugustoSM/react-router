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
    <div className='productCard' onClick={() => goToProductScreen(props.id)}>
      <img src={props.imgUrl}></img>
      <div className='stats'>
        <p className='productName'>{props.name}</p>
        <p className='productPrice'> R${props.price}</p>
      </div>
    </div>
  )
}

export default ProductCard;