import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 0.5em;
  background: papayawhip;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title> Type Commerce </Title>
    </Wrapper>
  );
};

export default Header;
