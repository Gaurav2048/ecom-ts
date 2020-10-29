import {
  LOADING_PRODUCTS,
  LOADING_PRODUCTS_SUCCESS,
  LOADING_PRODUCTS_FAILED,
  productsDispatchType,
  product,
  ADD_TO_CART,
} from '../Action/ProductActionTypes';
import produce from 'immer';

interface DefaultProductState {
  loading: boolean;
  error: boolean;
  products?: product[];
  cart: product[];
}

const defaultState: DefaultProductState = {
  loading: false,
  error: false,
  cart: [],
};

const ProductReducer = (
  state: DefaultProductState = defaultState,
  action: productsDispatchType
) => {
  const nextState = produce(state, (draft) => {
    switch (action.type) {
      case LOADING_PRODUCTS:
        draft.loading = true;
        return draft;

      case LOADING_PRODUCTS_SUCCESS:
        draft.products = action.payload;
        return draft;

      case LOADING_PRODUCTS_FAILED:
        draft.error = true;
        return draft;

      case ADD_TO_CART:
        var item = draft.products?.filter(
          (product) => product.id === action.payload
        );
        console.log(typeof item);

        draft.cart?.push(item[0]);
        return draft;

      default:
        return draft;
    }
  });
  return nextState;
};

export default ProductReducer;
