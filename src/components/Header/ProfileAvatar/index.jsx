import React, { useState } from 'react';

import pathAvatar from '../../../assets/images/evil-morty.jpg';
import { Container, Avatar } from './styles';

const ProfileAvatar = ({ dispatch }) => {
  const [isActive, setIsActive] = useState(false);

  const handleModalButtonRight = e => {
    e.persist();
    dispatch({
      type: 'MODAL',
    });
  };

  const handleIsActiveAvatar = e => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <Container>
      <Avatar
        onClick={e => handleIsActiveAvatar(e)}
        className={isActive && 'is-active'}
      >
        <img src={pathAvatar} alt="" />
        <div>
          <h2>Antônio</h2>
          <span
            onClick={() =>
              dispatch({
                type: 'MODAL',
                bodyText: 'Tem certeza que deseja sair?',
                buttonText: 'Sair',
                buttonAction: handleModalButtonRight,
              })
            }
          >
            Sair
          </span>
        </div>
      </Avatar>
    </Container>
  );
};

export default ProfileAvatar;
