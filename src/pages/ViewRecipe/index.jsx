import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ContentTitle from '../../components/ContentTitle';
import api from '../../services/api';
import { Container, Description, ArexText, PhotoCover } from './styles';

const ViewRecipe = ({ token }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const loadRecipe = async () => {
      const response = await api.get(`api/v1/recipe/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const {
        title,
        description,
        category: { name: categoryName, image: categoryImage },
      } = response.data;

      setRecipe({
        title,
        description,
        categoryName,
        categoryImage,
      });
    };

    loadRecipe();
  }, []);

  return (
    <Container>
      {console.log(recipe)}
      <ContentTitle text={recipe.categoryName} />
      <Description>
        <PhotoCover>
          <img src={recipe.categoryImage} alt={recipe.categoryName} />
        </PhotoCover>
        <ArexText>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </ArexText>
      </Description>
    </Container>
  );
};

export default ViewRecipe;
