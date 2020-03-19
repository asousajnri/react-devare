import React from 'react';

import pathLogo from '../../assets/images/devari-food.png';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { Container } from './styles';

const Login = () => (
  <Container>
    <img src={pathLogo} />

    <Form.Container>
      <Form.Input type="text" name="email" placeholder="Email" />
      <Form.Input type="password" name="password" placeholder="Senha" />
      <Button type="submit">Entrar</Button>
    </Form.Container>
  </Container>
);

export default Login;
