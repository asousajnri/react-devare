import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  display: inline-block;
  width: 100%;
  max-width: 35rem;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.buttonText};
  border-radius: 5px;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  box-shadow: 0 4px ${props => shade(0.3, props.theme.colors.primary)};
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 2px ${props => shade(0.3, props.theme.colors.primary)};
    top: 2px;
  }
`;
