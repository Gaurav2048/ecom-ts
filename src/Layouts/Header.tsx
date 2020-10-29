import React from 'react';
import styled from 'styled-components';
import CartCount from '../Components/Cart/CartCount';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 0.5em;
  background: papayawhip;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title> Type Commerce </Title>
      <CartCount />
    </Wrapper>
  );
};

export default Header;
