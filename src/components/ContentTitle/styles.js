import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #fff;
  padding: 3rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #eae9e9;
  border-bottom: 2px solid ${props => props.theme.colors.secundary};

  h2 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3rem;
  }
`;
