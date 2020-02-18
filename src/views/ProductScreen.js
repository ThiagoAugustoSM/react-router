import React, { useEffect, useState } from 'react';

import { searchById } from '../api/asosStore';

import { useParams } from 'react-router-dom';

import './ProductScreen.css';

const ProductScreen = (props) => {

  let { id } = useParams();
  let [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      let product = await searchById(9851612);
      console.log(product)
      setProduct(product);
    })();
  }, []);

  return (
    <>
    <div className='container__product'>
      <div className='imageContainer'>
        <img src={product ? `https://${product.media.images[0].url}` : ''}></img>
      </div>
      <div className='textContainer'>
        <h1>{product ? product.name: ''}</h1>
        <p>Produto ID: {id}</p>

        <div className='priceContainer'>
          <p>R$ {product ? product.price.current.value : ''}</p>
          <button>Adicionar ao Carrinho</button>
        </div>

        <div className='productContainer'>
          <p>Descrição do Item</p>
          <div dangerouslySetInnerHTML={{ __html: product ? product.description : null}}>

          </div>
        </div>
      </div>
    </div>
    </>
   )
}

export default ProductScreen;