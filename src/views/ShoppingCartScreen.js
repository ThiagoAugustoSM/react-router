import React from 'react';

import './ShoppingCartScreen.css';

import ProductCard from '../components/ProductCard';

import { connect } from 'react-redux';

const ShoppingCartScreen = (props) => {
  return (
    <>
      <div className='container__bodyCategory'>
        <h1> Carrinho de Compras </h1>
        <div className='container__categoryScreen'>
          {
            props.products.map(item => 
                <ProductCard
                  key={item.name}
                  name={item.name}
                  price={item.price.current.value}
                  imgUrl={`https://${item.media.images[0].url}`}
                  id={item.id}
                />)
            }
        </div>

      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {products: state}
}

export default connect(mapStateToProps)(ShoppingCartScreen);