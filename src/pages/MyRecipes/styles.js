import { shade } from 'polished';
import styled from 'styled-components';

import devices from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  width: 100%;
`;

export const GridFoodCards = styled.div`
  display: grid;

  @media ${devices.tabletLandscape} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .FoodCardAdd {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    text-decoration: none;
    padding: 4rem 2rem;
    min-height: 49.6rem;
    transition: all 0.5s ease-in-out;

    &:hover {
      background: ${props => shade(0.2, props.theme.colors.secundary)};
    }

    img {
      width: 10rem;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 2.5rem;
    }
  }
`;
