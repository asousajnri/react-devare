import styled, { css } from 'styled-components';

import { sizes } from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.flexDirection === 'column' ? 'column' : 'row'};
  align-items: ${props =>
    props.alignItems === 'center' ? 'center' : 'flex-start'};
  justify-content: ${props =>
    props.justifyContent === 'center' ? 'center' : 'space-between'};

  width: 100%;
  height: 100%;
  max-width: ${sizes.desktop};
  padding: 0 2rem;
  margin: 0 auto;

  ${props =>
    props.paddingVertical &&
    css`
      padding-top: 3rem;
    `}
`;
