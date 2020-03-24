import React, { useState } from 'react';

import { Container, Avatar } from './styles';

const ProfileAvatar = ({ dispatch, userName, userImage }) => {
  const [isActive, setIsActive] = useState(false);

  const handleModalButtonRight = e => {
    e.persist();

    dispatch({
      type: 'MODAL',
    });

    localStorage.removeItem('isLogged');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('image');

    window.location.reload();
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
        <img src={userImage} alt={userName} />
        <div>
          <h2>{userName}</h2>
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
