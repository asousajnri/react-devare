import styled, { css } from 'styled-components';

import { sizes } from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-bottom: 10rem; */

  width: 100%;
  min-height: 100vh;
  height: inherit;
  max-width: ${sizes.desktop};
  padding: 0 2rem;
  margin: 0 auto;

  ${props =>
    props.paddingVertical &&
    css`
      padding-top: 3rem;
    `}
`;
