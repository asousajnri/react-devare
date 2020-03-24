import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import ContentTitle from '../../components/ContentTitle';
import Form from '../../components/Form';
import api from '../../services/api';
import { Container } from './styles';

const EditRecipe = ({ dispatch, token, userId }) => {
  const history = useHistory();

  const [recipe, setRecipe] = useState({});
  const [categorys, setCategorys] = useState([]);

  const [newTitle, setNewTitle] = useState('');
  const [newSelectedCategory, setNewSelectedCategory] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const [requiredSelect, setRequiredSelect] = useState(false);
  const [requiredTitle, setRequiredTitle] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const loadCategorys = async () => {
      const response = await api.get('/api/v1/category', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      setCategorys(response.data);
    };

    loadCategorys();
  }, []);

  useEffect(() => {
    const loadRecipe = async () => {
      const response = await api.get(`api/v1/recipe/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const { title, description, category } = response.data;

      setNewTitle(title);
      setNewSelectedCategory(category.id);
      setNewDescription(description);

      setRecipe({
        title,
        description,
        curentCategoryName: category.name,
        currentCategoryId: category.id,
      });
    };

    loadRecipe();
  }, []);

  const updateRecipe = async () => {
    await api.put(
      `api/v1/recipe/${id}/`,
      {
        title: newTitle,
        description: newDescription,
        category: newSelectedCategory,
        user: userId,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
  };

  const handleModalButtonAction = e => {
    e.persist();
    dispatch({ type: 'MODAL' });
    history.push('/minhas-receitas');
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    if (
      newTitle !== recipe.title ||
      newDescription !== recipe.description ||
      newSelectedCategory !== recipe.currentCategoryId
    ) {
      await updateRecipe();

      dispatch({
        type: 'MODAL',
        bodyText: 'Receita atualizada com sucesso!',
        buttonText: 'Ir para receitas',
        buttonAction: handleModalButtonAction,
      });
    } else {
      dispatch({
        type: 'MODAL',
        bodyText:
          'A ação não pode ser concluída por que você não alterou nenhum dado. Altere algo para ser sucesso!!!',
        buttonText: 'Ir para receitas',
        buttonAction: handleModalButtonAction,
      });
    }
  };

  const handleFieldTitle = ({ target }) => {
    if (target.value) {
      setRequiredTitle(false);
      setNewTitle(target.value);
    } else {
      setRequiredTitle(true);
      setNewTitle(target.value);
    }
  };

  const handleFieldSelect = e => {
    const optionSelected = Array.from(
      e.target.querySelectorAll('option')
    ).filter(option =>
      option.getAttribute('value') === e.target.value ? option : null
    );

    if (optionSelected.length) {
      setRequiredSelect(false);
      setNewSelectedCategory(optionSelected[0].id);
    } else {
      setRequiredSelect(true);
      setNewSelectedCategory('');
    }
  };

  const handleDescription = ({ target }) => {
    setNewDescription(target.value);
  };

  return (
    <Container>
      <ContentTitle text="Editar receita" deleteButton dispatch={dispatch} />
      <Form.Container noBorderRadius onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Input
            value={newTitle}
            onChange={handleFieldTitle}
            type="text"
            name="adicionar"
            required={requiredTitle}
          />
          <Form.Select
            onChange={handleFieldSelect}
            name="category-select"
            id="category_select"
            defaultOption="Escolha uma opção"
            required={requiredSelect}
          >
            {categorys.map(category => (
              <option
                selected={
                  category.name === recipe.curentCategoryName && 'selected'
                }
                key={category.id}
                value={category.name}
                id={category.id}
              >
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Textarea
          value={newDescription}
          placeholder="Descrição"
          onChange={handleDescription}
        />
        <Button type="submit">Atualizar receita</Button>
      </Form.Container>
    </Container>
  );
};
export default EditRecipe;
