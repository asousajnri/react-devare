import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 6rem;
  margin-bottom: 2rem;

  &.is-required {
    select {
      border-color: red;
      border-width: 2px;
      margin-bottom: 0.5rem;
    }

    span {
      display: block;
    }
  }

  select {
    margin-bottom: 0;
    margin-right: 0;
    display: block;
    display: block;
    height: 6rem;
    width: 100%;
    border: 1px solid #317c94;
    padding: 0 2rem;
    border-radius: 5px;
    font-size: 1.8rem;
    background: transparent;
  }

  option {
    padding: 0 2rem;
  }

  span {
    color: #721c24;
    display: none;
    font-size: 1.2rem;
    font-style: italic;
  }
`;
