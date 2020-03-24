import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import MainContainer from './components/MainContainer';
import MenuMobile from './components/MenuMobile';
import NotifyModal from './components/NotifyModal';
import useIsMobile from './hooks/useIsMobile';
import reducer from './reducer';
import initialState from './reducer/initialState';
import Routes from './routes';
import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

const App = () => {
  const isMobile = useIsMobile();

  const [{ modal, openMenuMobile, userAuth }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        {userAuth.isLogged && (
          <Header
            dispatch={dispatch}
            userName={userAuth.name}
            userImage={userAuth.image}
          />
        )}
        {isMobile && <MenuMobile className={openMenuMobile && 'is-active'} />}

        <MainContainer>
          <Routes dispatch={dispatch} userAuth={userAuth} />
        </MainContainer>

        {modal.visible && (
          <NotifyModal
            bodyText={modal.bodyText}
            buttonText={modal.buttonText}
            buttonAction={modal.buttonAction}
            dispatch={dispatch}
          />
        )}
      </ThemeProvider>
    </Router>
  );
};

export default App;
