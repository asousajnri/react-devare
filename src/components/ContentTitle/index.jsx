import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import pathSvgReturn from '../../assets/images/svg/arrow.svg';
import pathSvgTrash from '../../assets/images/svg/trash.svg';
import { Container, GoBack, DeleteRecipe } from './styles';

const ContentTitle = ({ text, deleteButton, children }) => {
  const history = useHistory();
  const [enableGoBack, setEnableGoBack] = useState(true);

  useEffect(() => {
    const pathNameUrl = window.location.pathname.slice(1);

    setEnableGoBack(pathNameUrl !== 'receitas' ? enableGoBack : !enableGoBack);
  }, []);

  return (
    <Container>
      {enableGoBack && (
        <GoBack onClick={() => history.goBack()}>
          <img src={pathSvgReturn} alt="Icone Return" />
          <span>Voltar</span>
        </GoBack>
      )}

      <h2>{text}</h2>

      {deleteButton && (
        <DeleteRecipe>
          <img src={pathSvgTrash} alt="Icone Trash" />
        </DeleteRecipe>
      )}
    </Container>
  );
};

export default ContentTitle;
