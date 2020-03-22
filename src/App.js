import React, { useReducer } from 'react';
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
  const [{ modal }, dispatch] = useReducer(reducer, initialState);

  const isMobile = useIsMobile();

  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Header dispatch={dispatch} />
        {isMobile && <MenuMobile />}
        <MainContainer>
          <Routes dispatch={dispatch} />
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
