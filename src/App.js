import React from 'react';

import HomeScreen from './views/HomeScreen';
import ShoppingCartScreen from './views/ShoppingCartScreen';
import CategoryScreen from './views/CategoryScreen';
import ErrorScreen from './views/ErrorScreen';
import ProductScreen from './views/ProductScreen';

import {BrowserRouter as Router,
        Route,
        Switch
        } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route path='/carrinhodecompras' component={ShoppingCartScreen}/>
          <Route path='/categoria' component={CategoryScreen}/>
          <Route path='/error' component={ErrorScreen}/>
          <Route path='/produto' component={ProductScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
