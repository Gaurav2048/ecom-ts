export const LOADING_PRODUCTS = 'LOADING_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const LOADING_PRODUCTS_FAILED = 'LOADING_PRODUCTS_FAILED';
export const LOADING_PRODUCTS_SUCCESS = 'LOADING_PRODUCTS_SUCCESS';

export interface productsInterface {
  products: product[];
}

export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
}

export type successProducts = {
  type: typeof LOADING_PRODUCTS_SUCCESS;
  payload: product[];
};

export type loadingProducts = {
  type: typeof LOADING_PRODUCTS;
};

export type failedProducts = {
  type: typeof LOADING_PRODUCTS_FAILED;
};

export type addToCart = {
  type: typeof ADD_TO_CART;
  payload: number;
};

export type removeCart = {
  type: typeof REMOVE_CART;
};

export type productsDispatchType =
  | successProducts
  | loadingProducts
  | failedProducts
  | addToCart
  | removeCart;
