import React from 'react';

import HomeScreen from './views/HomeScreen';
import ShoppingCartScreen from './views/ShoppingCartScreen';
import CategoryScreen from './views/CategoryScreen';
import ErrorScreen from './views/ShoppingCartScreen';
import ProductScreen from './views/ProductScreen';

import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeScreen/>
        <ShoppingCartScreen/>
        <CategoryScreen/>
        <ErrorScreen/>
        <ProductScreen/>
      </Router>
    </div>
  );
}

export default App;
