import React from 'react';

import pathLogo from '../../assets/images/devari-food-white.png';
import MainContainer from '../MainContainer';
import OpenMenuMobile from './OpenMenuMobile';
import ProfileAvatar from './ProfileAvatar';
import { Container, Logo, WrapperControls } from './styles';

const Header = () => (
  <Container>
    <MainContainer>
      <Logo src={pathLogo} />

      <WrapperControls>
        <OpenMenuMobile />
        <ProfileAvatar />
      </WrapperControls>
    </MainContainer>
  </Container>
);

export default Header;
