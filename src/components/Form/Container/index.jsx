import React from 'react';

import { Form } from './styles';

const Container = ({ noBorderRadius, children, onSubmit }) => (
  <Form onSubmit={e => onSubmit(e)} noBorderRadius={noBorderRadius}>
    {children}
  </Form>
);

export default Container;
