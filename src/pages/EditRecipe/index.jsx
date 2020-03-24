import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button';
import ContentTitle from '../../components/ContentTitle';
import Form from '../../components/Form';
import api from '../../services/api';
import { Container } from './styles';

const EditRecipe = ({ dispatch }) => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadRecipe = async () => {
      const response = await api.get(`api/v1/recipe/${id}`, {
        headers: {
          Authorization: 'Token affba7c4211404e4fac80b27cb2c94f32910ced2',
        },
      });

      setRecipe(response.data);
    };

    loadRecipe();
  }, []);

  const [selects, setSelects] = useState([
    { id: 0, text: 'Pizza' },
    { id: 1, text: 'Sanduíche' },
    { id: 2, text: 'Japonesa' },
  ]);

  return (
    <Container>
      {console.log(recipe)}
      <ContentTitle text="Editar receita" deleteButton dispatch={dispatch} />
      <Form.Container borderRadius="false">
        <Form.Group>
          <Form.Input
            type="text"
            name="adicionar"
            placeholder="Nome da receita"
          />
          <Form.Select selects={selects} />
        </Form.Group>
        <Form.Textarea placeholder="Descrição" />
        <Button type="submit">Atualizar receita</Button>
      </Form.Container>
    </Container>
  );
};
export default EditRecipe;
