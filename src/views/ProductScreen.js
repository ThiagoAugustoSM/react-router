import React from 'react';

import { useParams } from 'react-router-dom';

import './ProductScreen.css';

const ProductScreen = (props) => {

  let { id } = useParams();

  return (
    <>
    <div className='container__product'>
      <div className='imageContainer'>
        <img src='https://images.asos-media.com/products/bellfield-mens-chronograph-bracelet-watch-in-gold/13215289-1-gold'></img>
      </div>
      <div className='textContainer'>
        <h1>Relógio de Ouro</h1>
        <p>Produto ID: {id}</p>

        <div className='priceContainer'>
          <p>R$ 12,00</p>
          <button>Adicionar ao Carrinho</button>
        </div>

        <div className='productContainer'>
          <p>Descrição do Item</p>
        </div>
      </div>
    </div>
    </>
   )
}

export default ProductScreen;