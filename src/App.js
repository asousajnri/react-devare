import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import MainContainer from './components/MainContainer';
import MenuMobile from './components/MenuMobile';
import Routes from './routes';
import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/default';

const App = () => (
  <Router>
    <GlobalStyle />
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <MenuMobile />
      <MainContainer flexDirection="column">
        <Routes />
      </MainContainer>
    </ThemeProvider>
  </Router>
);

export default App;
