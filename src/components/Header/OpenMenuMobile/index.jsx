import React, { useState } from 'react';

import { Container, Line } from './styles';

const OpenMenuMobile = ({ dispatch, openMenuMobile }) => {
  const handleOpenMenuMobile = e => {
    e.persist();

    dispatch({
      type: 'OPEN_MENU_MOBILE',
    });
  };

  return (
    <Container
      onClick={e => handleOpenMenuMobile(e)}
      className={openMenuMobile && 'is-active'}
    >
      <Line className="top" />
      <Line className="center" />
      <Line className="bottom" />
    </Container>
  );
};

export default OpenMenuMobile;
