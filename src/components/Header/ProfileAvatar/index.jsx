import React from 'react';

import pathAvatar from '../../../assets/images/evil-morty.jpg';
import { Container, Avatar } from './styles';

const ProfileAvatar = () => (
  <Container>
    <Avatar>
      <img src={pathAvatar} alt="" />
      <div>
        <h2>Antônio</h2>
        <span>Sair</span>
      </div>
    </Avatar>
  </Container>
);

export default ProfileAvatar;
