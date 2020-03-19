import React from 'react';

import pathAvatar from '../../../assets/images/evil-morty.jpg';
import { Container, Avatar } from './styles';

const ProfileAvatar = () => (
  <Container>
    <Avatar>
      <img src={pathAvatar} alt="" />
      <span>Sair</span>
    </Avatar>
  </Container>
);

export default ProfileAvatar;
