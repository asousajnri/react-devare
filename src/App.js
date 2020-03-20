import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import MainContainer from './components/MainContainer';
import MenuMobile from './components/MenuMobile';
// import NotifyModal from './components/NotifyModal';
import useIsMobile from './hooks/useIsMobile';
import Routes from './routes';
import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

const App = () => {
  const isMobile = useIsMobile();

  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Header />
        {isMobile && <MenuMobile />}
        <MainContainer>
          <Routes />
        </MainContainer>
        {/* <NotifyModal /> */}
      </ThemeProvider>
    </Router>
  );
};

export default App;
