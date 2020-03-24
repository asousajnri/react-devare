import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import pathLogo from '../../assets/images/devari-food.png';
import Button from '../../components/Button';
import Form from '../../components/Form';
import loadUser from '../../utils/loadUser';
import { Container } from './styles';

const Login = ({ dispatch }) => {
  const history = useHistory();
  const [notify, setNotify] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msgNotify, setMsgNotify] = useState('');
  const [requiredUserField, setRequiredUserField] = useState(false);
  const [requiredPasswordField, setRequiredPasswordField] = useState(false);
  const [requiredMsg, setRequiredMsg] = useState('Campo obrigatório');

  const handleSubmit = async e => {
    e.preventDefault();

    const watchFieldUser = () => {
      if (username) {
        setRequiredUserField(false);

        if (!username.includes('@')) {
          setRequiredUserField(true);
          setRequiredMsg('Digite um endereço de email valido!');
          return false;
        }

        setRequiredMsg('Campo obrigatório');
        return true;
      }

      setRequiredUserField(true);
      return false;
    };

    const watchFieldPassword = () => {
      if (password) {
        setRequiredPasswordField(false);
        return true;
      }

      setRequiredMsg('Campo obrigatório');
      setRequiredPasswordField(true);
      return false;
    };

    if (watchFieldUser() && watchFieldPassword()) {
      const response = await loadUser({
        username,
        password,
      });

      if (response.status !== 200) {
        setNotify(true);
        setMsgNotify('Impossível fazer login com as credenciais fornecidas!');
        setUsername('');
        setPassword('');
      } else {
        setNotify(false);
        const { status, id, name, image, token } = response;

        localStorage.setItem('isLogged', true);
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('image', image);

        dispatch({
          type: 'USER_AUTH',
          isLogged: localStorage.isLogged,
          id: localStorage.id,
          name: localStorage.name,
          image: localStorage.image,
          token: localStorage.token,
        });

        history.push('/receitas');
      }
    }
  };

  return (
    <Container>
      <img src={pathLogo} alt="Logo Devari Food" />

      <Form.Container onSubmit={handleSubmit}>
        {notify && <Form.Notify text={msgNotify} />}
        <Form.Input
          value={username}
          onChange={setUsername}
          type="text"
          name="email"
          placeholder="Email"
          required={requiredUserField}
          requiredMsg={requiredMsg}
        />
        <Form.Input
          value={password}
          onChange={setPassword}
          type="password"
          name="password"
          placeholder="Senha"
          required={requiredPasswordField}
          requiredMsg={requiredMsg}
        />
        <Button type="submit">Entrar</Button>
      </Form.Container>
    </Container>
  );
};

export default Login;
