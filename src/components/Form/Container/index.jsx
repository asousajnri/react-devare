import React from 'react';

import { Form } from './styles';

const Container = ({ borderRadius, children }) => (
  <Form borderRadius={borderRadius}>{children}</Form>
);

export default Container;
