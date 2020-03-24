import React from 'react';

import { Container } from './styles';

const Select = ({ name, id, children, defaultOption, required, onChange }) => (
  <Container className={required && 'is-required'}>
    <select name={name} id={id} onChange={e => onChange(e)}>
      <option>{defaultOption}</option>
      {children}
    </select>
    <span>Campo obrigatório!</span>
  </Container>
);

export default Select;
