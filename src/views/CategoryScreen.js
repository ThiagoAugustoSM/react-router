import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

import './CategoryScreen.css';

import { searchByName, searchById } from '../api/asosStore';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CategoryScreen = (props) => {

  let query = useQuery();
  let [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      let products = await searchByName(query.get('name'));
      console.log(products);
      setProducts(products)
    })();
  }, []);

  return (
    <>
    <div className='container__bodyCategory'>
      {query.get('promocao') && <h1>VENHA APROVEITAR AS PROMOÇÕES!!</h1>}
      {query.get('name') && <h1>Categoria: {query.get('name')}</h1>}
      <div className='container__categoryScreen'>
        {
         products.map(item => 
            <ProductCard
              key={item.name}
              name={item.name}
              price={item.price.current.value}
              imgUrl={`https://${item.imageUrl}`}
              id={item.id}
            />) 
        }
      </div>
    </div>    
    </>
  )
}

export default CategoryScreen;