import styled from 'styled-components';

import devices from '../../styles/devices';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.secundary};
  height: 8rem;
`;

export const Logo = styled.h1`
  overflow: hidden;
  font-size: 0;
  text-indent: -10000rem;

  width: 10rem;
  margin-right: auto;

  @media ${devices.tabletLandscape} {
    width: 12rem;
  }
`;

export const WrapperControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  @media ${devices.tabletLandscape} {
    margin-left: 6rem;
  }
`;
