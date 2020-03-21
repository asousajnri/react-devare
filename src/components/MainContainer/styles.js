import styled, { css } from 'styled-components';

import { sizes } from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: ${sizes.desktop};
  padding: 0 2rem;
  margin: 0 auto;

  ${props =>
    props.paddingVertical &&
    css`
      padding-top: 3rem;
    `}
`;
