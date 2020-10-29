import React from 'react';
import Title, { TitleProps } from './Title';
import Description, { DescProps } from './Description';
import Image, { ImageProps } from './Image';
import Price, { PriceProp } from './Price';

interface Property {
  children: React.ReactNode;
}

interface CardInterface {
  Title: React.FC<TitleProps>;
  Description: React.FC<DescProps>;
  Image: React.FC<ImageProps>;
  Price: React.FC<PriceProp>;
}

const Card: CardInterface = (props: Property) => {
  return (
    <div
      style={{
        padding: '10px',
        border: '1px solid #eee',
        margin: '5px',
        borderRadius: '8px',
        display: 'inline-block',
        breakInside: 'avoid',
        backgroundColor: '#fff',
        pageBreakInside: 'avoid',
        boxShadow: '2px 2px #cbcbcb',
      }}
    >
      {props.children}
    </div>
  );
};

Card.Title = Title;
Card.Description = Description;
Card.Image = Image;
Card.Price = Price;

export { Card };
