import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import { FaWindowClose } from 'react-icons/fa';

import * as ROUTES from '../constants/Routes';

import { removeItem } from '../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import './ProductCard.css'

const ProductCard = (props) => {

  let history = useHistory();
  let { pathname } = useLocation('');

  const goToProductScreen = (id='1234') => {
    history.push(`${ROUTES.PRODUCT_SCREEN}/${id}`);
  }

  return (
    <div className='productCard'>
      {pathname == ROUTES.SHOPPING_CART_SCREEN ? <FaWindowClose className='icon' onClick={() => props.removeItem({id: props.id})}/> : <></>}
      <img onClick={() => goToProductScreen(props.id)} src={props.imgUrl}></img>
      <div onClick={() => goToProductScreen(props.id)} className='stats'>
        <p className='productName'>{props.name}</p>
        <p className='productPrice'> R${props.price}</p>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProductCard);