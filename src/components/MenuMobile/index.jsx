import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Item } from './styles';

const MenuMobile = ({ className }) => (
  <Container className={className}>
    <Item>
      <Link to="/">Receitas</Link>
    </Item>
    <Item>
      <Link to="/">Minhas Receitas</Link>
    </Item>
    <Item>
      <Link to="/">Adicionar Receitas</Link>
    </Item>
  </Container>
);

export default MenuMobile;
