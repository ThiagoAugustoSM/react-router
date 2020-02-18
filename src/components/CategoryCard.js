import React from 'react';

import { useHistory } from 'react-router-dom';

import * as ROUTES from '../constants/Routes';

import './CategoryCard.css';

const renderImg = (category) => {
  switch(category){
    case 'bags':
      return './category_bags.jpg';
    case 'bottles':
      return './category_bottles.jpg';
    case 'sneakers':
      return './category_sneakers.jpg';  
    case 't_shirts':
      return './category_t_shirts.jpg'; 
    case 'watches':
      return './category_watches.jpg'; 
    default:
      return './category_bags.jpg';
  }
}

const CategoryCard = (props) => {

  let history = useHistory();

  const goToCategoryScreen = () => {
    history.push(`${ROUTES.CATEGORY_SCREEN}?name=${props.name}&promocao=${props.promocao}`)
  }

  return (
    <div className='container__category' onClick={goToCategoryScreen}>
      <img src={renderImg(props.name)}></img>
      <h1>{props.name}</h1> 
    </div>
  )
}

export default CategoryCard;