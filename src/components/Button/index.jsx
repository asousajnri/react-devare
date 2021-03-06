import React from 'react';

import { Container } from './styles';

const Button = ({ type, as: Tag = 'button', children }) => (
  <Container as={Tag} type={type}>
    {children}
  </Container>
);

export default Button;
