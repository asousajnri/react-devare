import styled from 'styled-components';

import devices from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 3rem 5rem;
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
`;

export const ButtonActions = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  display: flex;
  cursor: pointer;
`;

export const GoBack = styled(ButtonActions)`
  left: 3rem;
  align-items: center;

  @media ${devices.tabletLandscape} {
    left: 5rem;
  }

  img {
    width: 3rem;
    margin-right: 0.3rem;
  }

  span {
    font-size: 1.8rem;
    color: #000;
    display: none;

    @media ${devices.tabletLandscape} {
      display: block;
    }
  }
`;

export const DeleteRecipe = styled(ButtonActions)`
  right: 3rem;

  @media ${devices.tabletLandscape} {
    right: 5rem;
  }

  img {
    width: 2.5rem;
  }
`;
