import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../State/Store';
import { addToCart } from '../../State/Action/ProductActions';

export interface PriceProp {
  price?: number;
  id: number;
}

const Div = styled.div`
  background: #000000;
  display: inline-block;
  padding: 8px;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
`;

const AddDiv = styled(Div)`
  background: #cbcbcb;
  color: #000;
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Price: React.FC<PriceProp> = (props) => {
  const { id } = props;
  const cartInfo = useSelector((state: RootStore) => state.productsInfo.cart);
  const [inCart, setIncart] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(id));
  };

  useEffect(() => {
    cartInfo.filter((product) => product.id === id).length > 0
      ? setIncart(true)
      : setIncart(false);
  }, [cartInfo]);

  return (
    <div>
      <Div>{`$ ${props.children}`}</Div>
      <AddDiv onClick={handleAddToCart}>
        {inCart ? 'MOVE TO CHECKOUT' : 'ADD TO CART'}
      </AddDiv>
    </div>
  );
};

export default Price;
