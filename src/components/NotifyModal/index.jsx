import React from 'react';

import { Container, BoxModal, AreaText, Actions, Button } from './styles';

const NotifyModal = () => (
  <Container>
    <BoxModal>
      <AreaText>
        <p>Tem certeza que deseja sair?</p>
      </AreaText>
      <Actions>
        <Button>Cancelar</Button>
        <Button>Sair</Button>
      </Actions>
    </BoxModal>
  </Container>
);

export default NotifyModal;
