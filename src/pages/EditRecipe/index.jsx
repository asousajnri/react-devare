import React, { useState } from 'react';

import Button from '../../components/Button';
import ContentTitle from '../../components/ContentTitle';
import Form from '../../components/Form';
import { Container } from './styles';

const EditRecipe = () => {
  const [selects, setSelects] = useState([
    { id: 0, text: 'Pizza' },
    { id: 1, text: 'Sanduíche' },
    { id: 2, text: 'Japonesa' },
  ]);

  return (
    <Container>
      <ContentTitle text="Editar receita" deleteButton />
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
