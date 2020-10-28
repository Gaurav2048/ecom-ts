import React from 'react';
import styled from 'styled-components';

export interface TitleProps {
  title?: string;
}

const H1 = styled.h1`
  font-weight: 700;
  font-size: 18px;
`;

const Title: React.FC<TitleProps> = (props) => {
  return <H1>{props.children}</H1>;
};

export default Title;
