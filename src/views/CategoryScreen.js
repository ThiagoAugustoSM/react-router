import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

import './CategoryScreen.css';

import { searchByName, searchById } from '../api/asosStore';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CategoryScreen = (props) => {

  let query = useQuery();

  useEffect(() => {
    (async () => {
      let products = await searchByName('shoes');
      console.log(products);
      let product = await searchById(9851612);
      console.log(product);
    })();
  }, []);

  return (
    <>
    <div className='container__bodyCategory'>
      {query.get('promocao') && <h1>VENHA APROVEITAR AS PROMOÇÕES!!</h1>}
      {query.get('name') && <h1>Categoria: {query.get('name')}</h1>}
      <div className='container__categoryScreen'>
      <ProductCard name='Relogio' price='12,00' imgUrl='https://images.asos-media.com/products/bellfield-mens-chronograph-bracelet-watch-in-gold/13215289-1-gold'/>
      <ProductCard name='Relogio' price='12,00' imgUrl='https://images.asos-media.com/products/bellfield-mens-chronograph-bracelet-watch-in-gold/13215289-1-gold'/>
      <ProductCard name='Relogio' price='12,00' imgUrl='https://images.asos-media.com/products/bellfield-mens-chronograph-bracelet-watch-in-gold/13215289-1-gold'/>
      <ProductCard name='Relogio' price='12,00' imgUrl='https://images.asos-media.com/products/bellfield-mens-chronograph-bracelet-watch-in-gold/13215289-1-gold'/>
      <ProductCard name='Relogio' price='12,00' imgUrl='https://images.asos-media.com/products/bellfield-mens-chronograph-bracelet-watch-in-gold/13215289-1-gold'/>
      </div>
    </div>    
    </>
  )
}

export default CategoryScreen;