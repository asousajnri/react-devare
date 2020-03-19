import styled from 'styled-components';

export const Container = styled.ul`
  flex-direction: column;
  display: flex;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 100vh;
  transition: all 0.5s ease-in-out;
  z-index: 99;
  background: #f58324;

  &.is-active {
    top: 8rem;
  }
`;

export const Item = styled.li`
  display: flex;

  a {
    width: 100%;
    display: block;
    padding: 3rem;
    font-size: 2rem;
    border-bottom: 2px solid #f17209;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
  }
`;
