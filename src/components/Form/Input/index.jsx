import React from 'react';

import { Container } from './styles';

const Input = ({ type, name, placeholder }) => (
  <Container type={type} name={name} placeholder={placeholder} />
);

export default Input;
