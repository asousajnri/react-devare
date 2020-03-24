import React from 'react';

import { Container } from './styles';

const Textarea = ({ value, placeholder, onChange }) => (
  <Container
    value={value}
    placeholder={placeholder}
    onChange={e => onChange(e)}
  />
);

export default Textarea;
