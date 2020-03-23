import styled from 'styled-components';

import devices from '../../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
  }

  input,
  select,
  div {
    flex: 1;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
      margin-right: 0;
    }

    @media ${devices.tabletLandscape} {
      margin-right: 2rem;
      margin-bottom: 0;
    }
  }
`;
