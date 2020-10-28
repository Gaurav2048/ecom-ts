import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../State/Store';
import { getProducts } from '../State/Action/ProductActions';

const Home = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootStore) => state.products);
  console.log(products.products);

  useEffect(() => {
    dispatch(getProducts(10));
  }, []);

  return <div>Home</div>;
};

export default Home;
