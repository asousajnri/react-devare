import React from 'react';

import { Container } from './styles';

const MainContainer = ({ flexDirection, children }) => (
  <Container flexDirection={flexDirection}>{children}</Container>
);

export default MainContainer;
