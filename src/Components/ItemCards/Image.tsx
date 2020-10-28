import React from 'react';
import styled from 'styled-components';

export interface ImageProps {
  url?: string;
}

const Div = styled.div`
  width: '30%';
`;

const Image: React.FC<ImageProps> = (props) => {
  return (
    <Div>
      <img src={props.children} alt="" style={{ width: '100%' }} />
    </Div>
  );
};

export default Image;
