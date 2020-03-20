import React from 'react';

import pathLogo from '../../assets/images/devari-food-white.png';
import useIsMobile from '../../hooks/useIsMobile';
import MainContainer from '../MainContainer';
import MainMenu from './MainMenu';
import OpenMenuMobile from './OpenMenuMobile';
import ProfileAvatar from './ProfileAvatar';
import { Container, Logo, WrapperControls } from './styles';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <MainContainer>
        <Logo>
          Devari Food
          <img src={pathLogo} alt="Devari Food" />
        </Logo>

        {!isMobile && <MainMenu />}

        <WrapperControls>
          {isMobile && <OpenMenuMobile />}
          <ProfileAvatar />
        </WrapperControls>
      </MainContainer>
    </Container>
  );
};

export default Header;
