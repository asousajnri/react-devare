import React from 'react';

import pathAvatar from '../../../assets/images/evil-morty.jpg';
import { Container, Avatar } from './styles';

const ProfileAvatar = ({ dispatch }) => {
  const handleModalButtonRight = e => {
    e.persist();
    console.log(e.target);
    dispatch({
      type: 'MODAL',
      bodyText: 'Tem certeza que deseja sair?',
    });
  };

  return (
    <Container>
      <Avatar>
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
