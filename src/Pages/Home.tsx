import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../State/Store';
import { getProducts } from '../State/Action/ProductActions';
import { Card } from '../Components/ItemCards/Card';
import { product } from '../State/Action/ProductActionTypes';
import styled from 'styled-components';

const Container = styled.section`
  padding: 0.5em;
  columns: 3;
  column-gap: 15px;
  background-color: #f7f7f7;
  display: 'inline-block';
`;

const Home = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const productsState = useSelector((state: RootStore) => state.productsInfo);
  console.log(productsState);

  useEffect(() => {
    dispatch(getProducts(10));
  }, []);

  return (
    <Container>
      {productsState.products &&
        productsState.products.map((product: product) => (
          <Card key={product.id}>
            <Card.Title>{product.title}</Card.Title>
            <Card.Image>{product.image}</Card.Image>
            <Card.Description>{product.description}</Card.Description>
          </Card>
        ))}
      {productsState.products &&
        productsState.products.map((product: product) => {
          console.log(product.image);
        })}
    </Container>
  );
};

export default Home;
