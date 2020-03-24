import React from 'react';

import { Container } from './styles';

const Input = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  required,
  requiredMsg,
}) => (
  <Container className={required && 'is-required'}>
    <input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={e => onChange(e)}
    />
    {required && <span>{requiredMsg || 'Campo obrigatório'}</span>}
  </Container>
);

export default Input;
