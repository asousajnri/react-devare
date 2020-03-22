import React from 'react';

import { Container, BoxModal, AreaText, Actions, Button } from './styles';

const NotifyModal = ({ bodyText, buttonText, buttonAction, dispatch }) => (
  <Container>
    <BoxModal>
      <AreaText>
        <p>{bodyText}</p>
      </AreaText>
      <Actions>
        <Button onClick={() => dispatch({ type: 'MODAL' })}>Cancelar</Button>
        <Button onClick={e => buttonAction(e)}>{buttonText}</Button>
      </Actions>
    </BoxModal>
  </Container>
);

export default NotifyModal;
