import React, { useState } from 'react';

import ContentTitle from '../../components/ContentTitle';
import Form from '../../components/Form';
import { Container } from './styles';

const NewRecipe = () => {
  const [selects, setSelects] = useState([
    { id: 0, text: 'Pizza' },
    { id: 1, text: 'Sanduíche' },
    { id: 2, text: 'Japonesa' },
  ]);

  return (
    <Container>
      <ContentTitle text="Adicionar receita" />
      <Form.Container>
        <Form.Group>
          <Form.Input
            type="text"
            name="adicionar"
            placeholder="Nome da receita"
          />
          <Form.Select selects={selects} />
        </Form.Group>
      </Form.Container>
    </Container>
  );
};
export default NewRecipe;
