import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useSelector } from 'react-redux';
import { RootStore } from '../State/Store';
import CartItem from '../Components/Cart/CartItem';

const Checkout = (props: RouteComponentProps) => {
  const cartInfo = useSelector((state: RootStore) => state.productsInfo.cart);
  return (
    <div>
      {cartInfo.map((product, index) => (
        <CartItem product={product} key={index} />
      ))}
    </div>
  );
};

export default Checkout;
