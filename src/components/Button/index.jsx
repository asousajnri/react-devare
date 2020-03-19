import React from 'react';

import { Container } from './styles';

const Button = ({ type, children }) => (
  <Container type={type}>{children}</Container>
);

export default Button;
