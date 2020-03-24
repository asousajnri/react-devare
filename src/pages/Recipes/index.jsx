import React, { useEffect, useState } from 'react';

import ContentTitle from '../../components/ContentTitle';
import FoodCard from '../../components/FoodCard';
import loadRecipes from '../../utils/loadRecipes';
import { Container, GridFoodCards } from './styles';

const Recipes = ({ token }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const load = async () => {
      const response = await loadRecipes(token);

      setRecipes(response);
    };

    load();
  }, []);

  return (
    <Container>
      <ContentTitle text="Receitas" />
      <GridFoodCards>
        {recipes.map(recipe => (
          <FoodCard
            key={recipe.id}
            imagePath={recipe.category.image || 'https://place-hold.it/600x600'}
            category={recipe.category.name}
            recipeName={recipe.title}
            recipeText={recipe.description}
            textLink="Ver receita"
            textLinkUrl={`${recipe.id}/ver-receita`}
          />
        ))}
      </GridFoodCards>
    </Container>
  );
};

export default Recipes;
