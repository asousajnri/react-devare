import React from 'react';
import { Link } from 'react-router-dom';

import iconPlus from '../../assets/images/svg/more.svg';
import ContentTitle from '../../components/ContentTitle';
import FoodCard from '../../components/FoodCard';
import { Container, GridFoodCards } from './styles';

const MyRecipes = () => (
  <Container>
    <ContentTitle text="Minhas receitas" />
    <GridFoodCards>
      <FoodCard
        imagePath="https://www.odefensor.com.br/site/wp-content/uploads/2017/12/pizza.jpg"
        category="Pizza"
        recipeName="Calabresa"
        recipeText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        textLink="Editar"
        textLinkUrl="editar-receita"
      />
      <FoodCard
        imagePath="https://www.odefensor.com.br/site/wp-content/uploads/2017/12/pizza.jpg"
        category="Pizza"
        recipeName="Calabresa"
        recipeText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        textLink="Editar"
        textLinkUrl="editar-receita"
      />
      <Link to="/" className="FoodCardAdd">
        <img src={iconPlus} alt="" />
        <h2>Adicionar receita</h2>
      </Link>
    </GridFoodCards>
  </Container>
);

export default MyRecipes;
