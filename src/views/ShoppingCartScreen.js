import React from 'react';

import './ShoppingCartScreen.css';

const ShoppingCartScreen = (props) => {
  return (
    <>
      <div className='container__bodyCategory'>
        <h1> Carrinho de Compras </h1>
        <div className='container__categoryScreen'>
          {
            // products.map(item => 
            //     <ProductCard
            //       key={item.name}
            //       name={item.name}
            //       price={item.price.current.value}
            //       imgUrl={`https://${item.imageUrl}`}
            //       id={item.id}
            //     />)
            }
        </div>

      </div>
    </>
  )
}

export default ShoppingCartScreen;