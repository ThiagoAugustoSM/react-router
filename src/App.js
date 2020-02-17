import React from 'react';

import HomeScreen from './views/HomeScreen';
import ShoppingCartScreen from './views/ShoppingCartScreen';
import CategoryScreen from './views/CategoryScreen';
import ErrorScreen from './views/ShoppingCartScreen';


function App() {
  return (
    <div className="App">
      <HomeScreen/>
      <ShoppingCartScreen/>
      <CategoryScreen/>
      <ErrorScreen/>
    </div>
  );
}

export default App;
