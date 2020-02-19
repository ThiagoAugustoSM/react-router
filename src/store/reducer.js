import { ADD_ITEM, REMOVE_ITEM} from './actionTypes';

const shoppingCart = (state = [], action) => {
  switch(action.type){
    case ADD_ITEM:
      return state;
    case REMOVE_ITEM:
      return state;
    default:
      return state;
  }
}

export default shoppingCart;