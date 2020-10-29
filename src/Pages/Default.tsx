import React from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';

const DefaultDiv = styled.div`
  font-size: 100px;
  width: 100%;
  padding: 25px;
  text-align: center;
`;

const Default = (props: RouteComponentProps) => {
  return <DefaultDiv>404</DefaultDiv>;
};

export default Default;
