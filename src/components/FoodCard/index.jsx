import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import { Container, Photo, AreaText } from './styles';

const FoodCard = ({
  imagePath, category, recipeName, recipeText,
}) => (
  <Container>
    <Photo>
      <img src={imagePath} alt="" />
      <h2>{category}</h2>
    </Photo>
    <AreaText>
      <h3>{recipeName}</h3>
      <p>{recipeText}</p>
    </AreaText>
    <Button as={Link} to="/">
      Ver receita
    </Button>
  </Container>
);

export default FoodCard;
