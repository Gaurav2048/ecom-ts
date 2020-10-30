import React from 'react';
import { product } from '../../State/Action/ProductActionTypes';
import styled from 'styled-components';

interface Props {
  product: product;
}

const Container = styled.div`
  max-height: 200px;
  display: flex;
  flex-direction: row;
`;

const Display = styled.div`
  padding: 20px;
  justify-content: space-between;
  flex-direction: column;
`;

const imageStyle = {
  height: '180px',
  width: '180px',
};

const CartItem = (props: Props) => {
  const { product } = props;
  return (
    <Container>
      <img src={product.image} style={imageStyle} alt="" />
      <Display>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
      </Display>
    </Container>
  );
};

export default CartItem;
