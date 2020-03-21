import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import pathSvg from '../../assets/images/svg/arrow.svg';
import { Container, GoBack } from './styles';

const ContentTitle = ({ text, children }) => {
  const history = useHistory();
  const [enableGoBack, setEnableGoBack] = useState(true);

  useEffect(() => {
    const pathNameUrl = window.location.pathname.slice(1);

    setEnableGoBack(pathNameUrl != 'receitas' ? enableGoBack : !enableGoBack);
  }, []);

  return (
    <Container>
      {enableGoBack && (
        <GoBack onClick={() => history.goBack()}>
          <img src={pathSvg} alt="" />
          <span>Voltar</span>
        </GoBack>
      )}

      <h2>{text}</h2>
    </Container>
  );
};

export default ContentTitle;
