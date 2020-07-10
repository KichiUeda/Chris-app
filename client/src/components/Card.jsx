/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer.jsx';
import Label from './Label.jsx';

const CardWrapper = styled.div`
  text-align: center;
`;

const CardContainer = styled.div`
  background-color: #fff;
  color: #a1a7b2;
  height: 221px;
  width: 270px;
`;

const Card = (props) => {
  console.log('card ', props);
  return (
    <CardWrapper>
      <h2>Card</h2>
      <CardContainer>
        <ImageContainer thumbnails={props.thumbs.products} />
        <Label trait={props.thumbs.trait} />
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
