import React from 'react';

import ContentTitle from '../../components/ContentTitle';
import FoodCard from '../../components/FoodCard';
import { Container, GridFoodCards } from './styles';

const Recipes = () => (
  <Container>
    <ContentTitle text="Recipes" />
    <GridFoodCards>
      <FoodCard
        imagePath="https://www.odefensor.com.br/site/wp-content/uploads/2017/12/pizza.jpg"
        category="Pizza"
        recipeName="Calabresa"
        recipeText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </GridFoodCards>
  </Container>
);

export default Recipes;
