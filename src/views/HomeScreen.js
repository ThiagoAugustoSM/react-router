import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

import './HomeScreen.css';

import * as ROUTES from '../constants/Routes';

import { searchByName } from '../api/asosStore';

const HomeScreen = (props) => {

  let history = useHistory();
  let [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      let products = await searchByName('watches');
      setProducts(products.slice(0,3));
    })();
  }, []);

  const goToPromo = () => {
    history.push(`${ROUTES.CATEGORY_SCREEN}?name=watches&promocao=hoje`)
  }


  return (
    <>
      <div className='container'>
        <img className='bg-img' src='/watches.jpg'></img>
        <div className='call-to-action'>
          <h1>JÁ ESTÁ NA HORA DE TROCAR ESSE RELÓGIO!</h1>
          <p>Que tal ver as novas oportunidades dos relógios moda verão Platzi?</p>
          <p>Eles vem com desconto na plataforma educacional!</p>
          <button onClick={goToPromo}>Ver promoções</button>
        </div>
        <div className='container categoria'>
          <h1>Principais Categorias</h1>
          <div className='card__container cardContainer__category'>
            <CategoryCard name='bags' promocao='hoje'/>
            <CategoryCard name='bottles' promocao='hoje'/>
            <CategoryCard name='sneakers' promocao='hoje'/>
            <CategoryCard name='t_shirts' promocao='hoje'/>
            <CategoryCard name='watches' promocao='hoje'/>
          </div>
          <h1>Produtos em Promoção</h1>
          <div className='card__container cardContainer__product'>
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
      </div>
      
      
    </>
  )
}

export default HomeScreen;