import styled, { css } from 'styled-components';

import devices from '../../../styles/devices';

export const Container = styled.div`
  display: flex;
`;

const HOVER_AND_CLICKEVENT = `
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  background: #fff;

  h2 {
    display: block;
  }

  span {
    display: block;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 3px;
  background: transparent;
  transition: all 0.3s;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  h2 {
    font-size: 1.6rem;
    display: none;
    margin-bottom: 0.4rem;
  }

  img {
    width: 5rem;
    height: 5rem;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: all 0.3s;
  }

  span {
    /* pointer-events: none; */
    display: inline-block;
    color: red;
    font-size: 1.3rem;
    text-decoration: underline;
    display: none;
    transition: all 0.3s;
    cursor: pointer;
  }

  &.is-active {
    img {
      border-color: ${props => props.theme.colors.primary};
    }
    
    ${css`
      ${HOVER_AND_CLICKEVENT}
    `}
  }

  @media ${devices.tabletLandscape} {
    img {
      border-color: ${props => props.theme.colors.primary};
    }
    
    &:hover {
      ${css`
        ${HOVER_AND_CLICKEVENT}
      `};
  }
`;
