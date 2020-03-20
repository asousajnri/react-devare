import React from 'react';

import { Container } from './styles';

const MainContainer = ({
  paddingVertical,
  flexDirection,
  alignItems,
  justifyContent,
  children,
}) => (
  <Container
    paddingVertical={paddingVertical}
    flexDirection={flexDirection}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </Container>
);

export default MainContainer;
