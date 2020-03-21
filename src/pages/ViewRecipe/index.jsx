import React from 'react';

import ContentTitle from '../../components/ContentTitle';
import { Container, Description, ArexText, PhotoCover } from './styles';

const ViewRecipe = () => (
  <Container>
    <ContentTitle text="Pizza" />
    <Description>
      <PhotoCover>
        <img
          src="https://www.odefensor.com.br/site/wp-content/uploads/2017/12/pizza.jpg"
          alt=""
        />
      </PhotoCover>
      <ArexText>
        <h2>Descrição</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ArexText>
    </Description>
  </Container>
);

export default ViewRecipe;
