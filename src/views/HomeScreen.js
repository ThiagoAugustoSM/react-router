import React from 'react';

import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const HomeScreen = (props) => {
  return (
    <>
      <ProductCard name='Relogio' price='12,00' imgUrl='https://images.asos-media.com/products/bellfield-mens-chronograph-bracelet-watch-in-gold/13215289-1-gold'/>
      <CategoryCard name='bags' promocao='hoje'/>
    </>
  )
}

export default HomeScreen;