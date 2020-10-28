import React from 'react';
import styled from 'styled-components';

export interface DescProps {
  description?: string;
}

const H3 = styled.h3`
  font-size: 16px;
  color: darkgray;
  font-weight: 300;
`;

const Description: React.FC<DescProps> = (props) => {
  return <H3>{props.children}</H3>;
};

export default Description;
