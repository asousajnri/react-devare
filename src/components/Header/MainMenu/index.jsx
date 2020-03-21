import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const MainMenu = () => (
  <Container>
    <li>
      <Link to="/receitas">Receitas</Link>
    </li>
    <li>
      <Link to="/minhas-receitas">Minhas Receitas</Link>
    </li>
    <li>
      <Link to="/adicionar-receita">Adicionar receitas</Link>
    </li>
  </Container>
);

export default MainMenu;
