import React from 'react';

import { Container } from './styles';

const Textarea = ({ defaultValue, value, placeholder, onChange }) => (
  <Container
    defaultValue={defaultValue}
    value={value}
    placeholder={placeholder}
    onChange={e => onChange(e)}
  />
);

export default Textarea;
