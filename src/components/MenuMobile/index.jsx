import React from 'react';

import { Container, Item } from './styles';

const MenuMobile = () => (
  <Container>
    <Item>
      <a href="/">Receitas</a>
    </Item>
    <Item>
      <a href="/">Minhas Receitas</a>
    </Item>
    <Item>
      <a href="/">Adicionar Receitas</a>
    </Item>
  </Container>
);

export default MenuMobile;
