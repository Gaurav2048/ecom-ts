export const LOADING_PRODUCTS = 'LOADING_PRODUCTS';
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

export type productsDispatchType =
  | successProducts
  | loadingProducts
  | failedProducts;
