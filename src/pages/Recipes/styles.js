import styled from 'styled-components';

import devices, { sizes } from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  width: 100%;
`;

export const GridFoodCards = styled.div`
  display: grid;

  @media ${devices.tabletLandscape} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
