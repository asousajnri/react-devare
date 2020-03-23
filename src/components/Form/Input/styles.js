import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;

  &.is-required {
    input {
      border-color: red;
      border-width: 2px;
    }
  }

  input {
    height: 6rem;
    width: 100%;
    border: 1px solid #317c94;
    padding: 0 2rem;
    border-radius: 5px;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  span {
    color: #721c24;
    display: block;
    font-size: 1.2rem;
    font-style: italic;
  }
`;
