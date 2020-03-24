import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import iconPlus from '../../assets/images/svg/more.svg';
import ContentTitle from '../../components/ContentTitle';
import FoodCard from '../../components/FoodCard';
import api from '../../services/api';
import { Container, GridFoodCards } from './styles';

const MyRecipes = ({ userId, token }) => {
  const [recipes, setMyRecipes] = useState([]);

  useEffect(() => {
    const loadMyRecipes = async () => {
      const response = await api.get(`api/v1/recipe?user=${userId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      setMyRecipes(response.data);
    };

    loadMyRecipes();
  }, []);

  return (
    <Container>
      <ContentTitle text="Minhas receitas" />
      <GridFoodCards>
        {recipes.map(recipe => (
          <FoodCard
            key={recipe.id}
            imagePath={recipe.category.image}
            category={recipe.category.name}
            recipeName={recipe.title}
            recipeText={recipe.description}
            textLink="Editar"
            textLinkUrl={`${recipe.id}/editar-receita`}
          />
        ))}

        <Link to="/adicionar-receita" className="FoodCardAdd">
          <img src={iconPlus} alt="" />
          <h2>Adicionar receita</h2>
        </Link>
      </GridFoodCards>
    </Container>
  );
};

export default MyRecipes;
