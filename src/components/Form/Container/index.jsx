import React from 'react';

import { Form } from './styles';

const Container = ({ borderRadius, children, onSubmit }) => (
  <Form onSubmit={e => onSubmit(e)} borderRadius={borderRadius}>
    {children}
  </Form>
);

export default Container;
