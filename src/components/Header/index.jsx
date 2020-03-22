import React from 'react';
import { Link } from 'react-router-dom';

import pathLogo from '../../assets/images/devari-food-white.png';
import useIsMobile from '../../hooks/useIsMobile';
import MainMenu from './MainMenu';
import OpenMenuMobile from './OpenMenuMobile';
import ProfileAvatar from './ProfileAvatar';
import { Container, Logo, WrapperControls, GridMax } from './styles';

const Header = ({ dispatch }) => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <GridMax>
        <Logo>
          <Link to="/receitas">
            Devari Food
            <img src={pathLogo} alt="Devari Food" />
          </Link>
        </Logo>

        {!isMobile && <MainMenu />}

        <WrapperControls>
          {isMobile && <OpenMenuMobile />}
          <ProfileAvatar dispatch={dispatch} />
        </WrapperControls>
      </GridMax>
    </Container>
  );
};

export default Header;
