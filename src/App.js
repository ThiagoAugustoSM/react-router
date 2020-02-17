import React from 'react';

import HomeScreen from './views/HomeScreen';
import ShoppingCartScreen from './views/ShoppingCartScreen';
import CategoryScreen from './views/CategoryScreen';
import ErrorScreen from './views/ErrorScreen';
import ProductScreen from './views/ProductScreen';

import Header from './components/Header';

import {BrowserRouter as Router,
        Route,
        Switch,
        Redirect
        } from 'react-router-dom';

import * as ROUTES from './constants/Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path={ROUTES.HOME_SCREEN} component={HomeScreen}/>
          <Route path={ROUTES.SHOPPING_CART_SCREEN} component={ShoppingCartScreen}/>
          <Route path={ROUTES.CATEGORY_SCREEN} component={CategoryScreen}/>
          <Route path={ROUTES.CATEGORY_SCREEN_OLD}>
            <Redirect to={ROUTES.CATEGORY_SCREEN}/>
          </Route>
          <Route path={ROUTES.PRODUCT_SCREEN} component={ProductScreen}/>
          <Route path={ROUTES.ERROR_SCREEN} component={ErrorScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
