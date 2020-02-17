import React from 'react';

import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CategoryScreen = (props) => {

  let query = useQuery();

  return (
    <>
    
    <h1>CategoryScreen</h1>
    {query.get('name') && <h1>Name: {query.get('name')}</h1>}
    {query.get('promocao') && <h1>Promoção: {query.get('promocao')}</h1>}
    </>
  )
}

export default CategoryScreen;