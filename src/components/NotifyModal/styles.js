import styled from 'styled-components';

export const flexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(flexContainer)`
  position: fixed;
  z-index: 90;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000070;
  padding: 0 2rem;
`;

export const BoxModal = styled(flexContainer)`
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  max-width: 39rem;
  width: 100%;
  overflow: hidden;
`;

export const AreaText = styled(flexContainer)`
  padding: 3rem;
  width: 100%;
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #eae7e7;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 6rem;
  border: none;
  border-right: 1px solid #eae7e7;
  background: transparent;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s;

  &:last-of-type {
    border-right: none;
  }

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.buttonText};
  }
`;
