import {
  LOADING_PRODUCTS,
  LOADING_PRODUCTS_SUCCESS,
  LOADING_PRODUCTS_FAILED,
  ADD_TO_CART,
  productsDispatchType,
} from './ProductActionTypes';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getProducts = (limit: number) => async (
  dispatch: Dispatch<productsDispatchType>
) => {
  dispatch({
    type: LOADING_PRODUCTS,
  });

  try {
    const res = await axios.get(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    dispatch({
      type: LOADING_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: LOADING_PRODUCTS_FAILED,
    });
  }
};

export const addToCart = (id: number) => (
  dispatch: Dispatch<productsDispatchType>
) => {
  dispatch({
    type: ADD_TO_CART,
    payload: id,
  });
};
