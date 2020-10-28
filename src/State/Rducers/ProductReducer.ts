import {
  LOADING_PRODUCTS,
  LOADING_PRODUCTS_SUCCESS,
  LOADING_PRODUCTS_FAILED,
  productsDispatchType,
  productsInterface,
} from '../Action/ProductActionTypes';

interface DefaultProductState {
  loading: boolean;
  error: boolean;
  products?: productsInterface;
}

const defaultState: DefaultProductState = {
  loading: false,
  error: false,
};

const ProductReducer = (
  state: DefaultProductState = defaultState,
  action: productsDispatchType
) => {
  switch (action.type) {
    case LOADING_PRODUCTS:
      return { ...state, loading: true };

    case LOADING_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };

    case LOADING_PRODUCTS_FAILED:
      return { ...state, error: true };

    default:
      return state;
  }
};

export default ProductReducer;
