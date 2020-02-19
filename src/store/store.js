import { createStore } from 'redux'; 
import shoppingCart from './reducer';

const store = createStore(shoppingCart);

export default store;