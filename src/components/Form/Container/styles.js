import styled from 'styled-components';

export const Form = styled.form`
  background: #fff;
  border-radius: ${props => (props.noBorderRadius ? '0px' : '5px')};
  width: 100%;
  padding: 3rem;
  border: 1px solid #ddd;
`;
