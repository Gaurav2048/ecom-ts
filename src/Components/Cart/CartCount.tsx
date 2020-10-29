import React from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import { RootStore } from '../../State/Store';
import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  color: black;
  cursor: pointer;
`;

const CartCount: React.FC = () => {
  const moveToCheckout = () => {
    navigate(`/cart`);
  };

  const cartInfo = useSelector((state: RootStore) => state.productsInfo.cart);

  return (
    <H1 onClick={moveToCheckout}>
      {cartInfo.length ? `${cartInfo.length} Items on Cart` : 'No items yet'}
    </H1>
  );
};

export default CartCount;
