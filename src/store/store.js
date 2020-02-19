import { createStore } from 'redux'; 
import shoppingCart from './reducer';

const store = createStore(shoppingCart, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;