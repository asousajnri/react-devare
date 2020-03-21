import styled from 'styled-components';

import devices from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 3rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #eae9e9;
  border-bottom: 2px solid ${props => props.theme.colors.secundary};
  position: relative;

  h2 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3rem;
    text-align: center;
  }

  a {
    position: absolute;
    left: 3rem;
    display: flex;
    align-items: center;

    @media ${devices.tabletLandscape} {
      left: 5rem;
    }
  }

  span {
    font-size: 1.8rem;
    color: #000;
    display: none;

    @media ${devices.tabletLandscape} {
      display: block;
    }
  }

  img {
    width: 3rem;
    margin-right: 0.3rem;
  }
`;

export const GoBack = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  left: 3rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media ${devices.tabletLandscape} {
    left: 5rem;
  }
`;
