import React from 'react';

import { useParams } from 'react-router-dom';

const ProductScreen = (props) => {

  let { id } = useParams();

  return (
    <>
    <h1>ProductScreen:</h1>
    <h1>ID: {id}</h1>
    </>
   )
}

export default ProductScreen;