import React from 'react';
import { Link } from 'react-router-dom';

import pathSvg from '../../assets/images/svg/arrow.svg';
import { Container } from './styles';

const ContentTitle = ({ text, children }) => (
  <Container>
    <Link to="/">
      <img src={pathSvg} alt="" />
      <span>Voltar</span>
    </Link>
    <h2>{text}</h2>
  </Container>
);

export default ContentTitle;
