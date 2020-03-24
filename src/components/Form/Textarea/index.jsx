import React from 'react';

import { Container } from './styles';

const Textarea = ({ placeholder, onChange }) => (
  <Container placeholder={placeholder} onChange={e => onChange(e)} />
);

export default Textarea;
