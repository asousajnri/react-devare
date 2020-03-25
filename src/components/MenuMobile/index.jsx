import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Item } from './styles';

const MenuMobile = ({ openMenuMobile, dispatch }) => {
  const handleClickItem = () => {
    dispatch({
      type: 'OPEN_MENU_MOBILE',
    });
  };

  return (
    <Container className={openMenuMobile && 'is-active'}>
      <Item>
        <Link onClick={() => handleClickItem()} to="/receitas">
          Receitas
        </Link>
      </Item>
      <Item>
        <Link onClick={() => handleClickItem()} to="/minhas-receitas">
          Minhas Receitas
        </Link>
      </Item>
      <Item>
        <Link onClick={() => handleClickItem()} to="/adicionar-receita">
          Adicionar Receitas
        </Link>
      </Item>
    </Container>
  );
};

export default MenuMobile;
