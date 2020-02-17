import React from 'react';

import { useHistory } from 'react-router-dom';

import * as ROUTES from '../constants/Routes';

const CategoryCard = (props) => {

  let history = useHistory();

  const goToCategoryScreen = () => {
    history.push(`${ROUTES.CATEGORY_SCREEN}?name=${props.name}&promocao=${props.promocao}`)
  }

  return (
    <h1 onClick={goToCategoryScreen}>CategoryCard</h1> 
  )
}

export default CategoryCard;