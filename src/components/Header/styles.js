import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.secundary};
  height: 8rem;
`;

export const Logo = styled.img`
  width: 10rem;
  margin-right: auto;
`;

export const WrapperControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;
