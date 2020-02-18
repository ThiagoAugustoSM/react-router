import React from 'react';

import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const HomeScreen = (props) => {
  return (
    <>
      <h1>HomeScreen</h1>
      <ProductCard/>
      <CategoryCard name='bags' promocao='hoje'/>
    </>
  )
}

export default HomeScreen;