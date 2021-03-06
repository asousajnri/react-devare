import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Photo, AreaText } from './styles';

const FoodCard = ({
  imagePath,
  category,
  recipeName,
  recipeText,
  textLink,
  textLinkUrl,
}) => (
  <Container>
    <Photo>
      <img src={imagePath} alt="" />
      <h2>{category}</h2>
    </Photo>
    <AreaText>
      <h3>{recipeName}</h3>
      <p>{recipeText}</p>
      <Link to={`/${textLinkUrl}`}>{textLink}</Link>
    </AreaText>
  </Container>
);

export default FoodCard;
