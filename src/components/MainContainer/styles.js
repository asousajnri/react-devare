import styled from 'styled-components';

import { sizes } from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: ${sizes.desktop};
  padding: 0 2rem;
  margin: 0 auto;
`;
