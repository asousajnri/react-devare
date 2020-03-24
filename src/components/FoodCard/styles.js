import styled from 'styled-components';

import devices from '../../styles/devices';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Container = styled(FlexContainer)`
  width: 100%;
`;

export const Photo = styled(FlexContainer)`
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  max-height: 35rem;
  height: 35rem;

  &:hover {
    img {
      transform: scale(1.5);
    }
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 2;

    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+45,0.7+100 */
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 45%,
      rgba(0, 0, 0, 0.7) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 45%,
      rgba(0, 0, 0, 0.7) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 45%,
      rgba(0, 0, 0, 0.7) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#b3000000',GradientType=0 ); /* IE6-9 */
  }

  img {
    position: relative;
    z-index: 1;
    transition: all 0.5s;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  h2 {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    z-index: 3;
    color: #fff;
    font-size: 2rem;
  }
`;

export const AreaText = styled(FlexContainer)`
  display: flex;
  padding: 4rem 3rem;
  background: #fff;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  max-height: 30rem;
  height: 30rem;
  overflow: hidden;

  @media ${devices.tabletLandscape} {
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
  }

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin-bottom: 2rem;
    word-break: break-all;
  }

  a {
    color: ${props => props.theme.colors.primary};
    margin-top: auto;
  }
`;
