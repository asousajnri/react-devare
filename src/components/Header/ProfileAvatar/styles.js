import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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

  &:hover {
    padding: 0.5rem 1.5rem 0.5rem 1rem;
    background: #fff;

    img {
      border-color: red;
    }

    span {
      display: block;
      font-size: 1.6rem;
      width: auto;
    }
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
    display: inline-block;
    margin-left: 1rem;
    color: red;
    font-size: 1.6rem;
    text-transform: uppercase;
    text-decoration: underline;
    display: none;
    width: 0;
    transition: all 0.3s;
    cursor: pointer;
    font-weight: bold;
  }
`;
