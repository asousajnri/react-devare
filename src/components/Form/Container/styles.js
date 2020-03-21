import styled from 'styled-components';

export const Form = styled.form`
  background: #fff;
  border-radius: ${props => (props.borderRadius === true ? '5px' : '0')};
  width: 100%;
  padding: 3rem;
  border: 1px solid #ddd;
`;
