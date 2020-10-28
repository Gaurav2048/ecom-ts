import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';

const RootReducer = combineReducers({
  productsInfo: ProductReducer,
});

export default RootReducer;
