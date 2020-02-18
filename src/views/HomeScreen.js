import React from 'react';

import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

import './HomeScreen.css';

const HomeScreen = (props) => {
  return (
    <>
      <div className='container'>
        <img className='bg-img' src='/watches.jpg'></img>
        <div className='call-to-action'>
          <h1>JÁ ESTÁ NA HORA DE TROCAR ESSE RELÓGIO!</h1>
          <p>Que tal ver as novas oportunidades dos relógios moda verão Platzi?</p>
          <p>Eles vem com desconto na plataforma educacional!</p>
          <button>Ver promoções</button>
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
            <ProductCard name='Relogio' price='12,00' imgUrl='https://images.asos-media.com/products/bellfield-mens-chronograph-bracelet-watch-in-gold/13215289-1-gold'/>
            <ProductCard name='Relogio' price='12,00' imgUrl='https://images.asos-media.com/products/bellfield-mens-chronograph-bracelet-watch-in-gold/13215289-1-gold'/>
            <ProductCard name='Relogio' price='12,00' imgUrl='https://images.asos-media.com/products/bellfield-mens-chronograph-bracelet-watch-in-gold/13215289-1-gold'/>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default HomeScreen;