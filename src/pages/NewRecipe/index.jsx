import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import ContentTitle from '../../components/ContentTitle';
import Form from '../../components/Form';
import api from '../../services/api';
import { Container } from './styles';

const NewRecipe = ({ dispatch, userId, token }) => {
  const history = useHistory();
  const [categorys, setCategorys] = useState([]);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const [requiredSelect, setRequiredSelect] = useState(false);
  const [requiredTitle, setRequiredTitle] = useState(false);

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

  const handleModalAction = e => {
    e.persist();

    dispatch({
      type: 'MODAL',
    });

    history.push('/receitas');
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    if (title && category) {
      await api.post(
        'api/v1/recipe/',
        {
          title,
          description,
          category,
          user: userId,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setTitle('');
      setDescription('');

      dispatch({
        type: 'MODAL',
        bodyText: 'Receita cadastrada com sucesso!',
        buttonText: 'Ir para Receitas',
        buttonAction: handleModalAction,
      });
    } else {
      setRequiredTitle(true);
      setRequiredSelect(true);
    }
  };

  const handleFieldTitle = ({ target }) => {
    if (target.value) {
      setRequiredTitle(false);
      setTitle(target.value);
    } else {
      setRequiredTitle(true);
      setTitle(target.value);
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
      setCategory(optionSelected[0].id);
    } else {
      setRequiredSelect(true);
      setCategory('');
    }
  };

  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };

  return (
    <Container>
      <ContentTitle text="Adicionar receita" />
      <Form.Container borderRadius="false" onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Input
            value={title}
            onChange={handleFieldTitle}
            type="text"
            name="adicionar"
            placeholder="Nome da receita"
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
              <option key={category.id} value={category.name} id={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Textarea
          value={description}
          placeholder="Descrição"
          onChange={handleDescription}
        />
        <Button type="submit">Criar receita</Button>
      </Form.Container>
    </Container>
  );
};
export default NewRecipe;
