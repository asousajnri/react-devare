import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  margin-left: auto;

  li {
    margin-right: 2rem;

    &:last-of-type {
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
`;
