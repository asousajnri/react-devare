import styled from 'styled-components';

import devices from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  width: 100%;
  margin-bottom: 10rem;
`;

export const Description = styled(Container)`
  display: flex;
  margin-bottom: 0;
`;

export const PhotoCover = styled.div`
  max-height: 40rem;
  overflow: hidden;

  &,
  img {
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
`;

export const ArexText = styled(Container)`
  background: #fff;
  padding: 3rem;
  margin-bottom: 0;
  border: 1px solid #eae9e9;
  border-top: none;
  border-radius: 5px;

  @media ${devices.tabletLandscape} {
    padding: 4rem 6rem;
  }

  h2 {
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 2rem;
    max-width: 40rem;
  }
`;
