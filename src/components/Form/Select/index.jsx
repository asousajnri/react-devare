import React from 'react';

import { Container } from './styles';

const Select = ({ selects }) => (
  <Container>
    <option>Qual Categória?</option>
    {selects.map(select => (
      <option key={select.id}>{select.text}</option>
    ))}
  </Container>
);

export default Select;
