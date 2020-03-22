import React, { useState } from 'react';

import { Container, Line } from './styles';

const OpenMenuMobile = ({ dispatch }) => {
  const [isActive, setIsActive] = useState(false);

  const handleOpenMenuMobile = e => {
    e.persist();
    setIsActive(!isActive);
    dispatch({
      type: 'OPEN_MENU_MOBILE',
    });
  };

  return (
    <Container
      onClick={e => handleOpenMenuMobile(e)}
      className={isActive && 'is-active'}
    >
      <Line className="top" />
      <Line className="center" />
      <Line className="bottom" />
    </Container>
  );
};

export default OpenMenuMobile;
