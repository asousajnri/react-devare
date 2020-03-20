import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const MainMenu = () => (
  <Container>
    <li>
      <Link to="/">Receitas</Link>
    </li>
    <li>
      <Link to="/">Minhas Receitas</Link>
    </li>
    <li>
      <Link to="/">Adicionar receitas</Link>
    </li>
  </Container>
);

export default MainMenu;
