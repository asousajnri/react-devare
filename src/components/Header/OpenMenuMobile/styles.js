import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 2.5rem;
  width: 4rem;
  margin-right: 1.5rem;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;

  &.is-active {
    height: 4rem;
    background: #267d9a40;

    .center {
      display: none;
    }

    .top {
      transform: rotate(45deg);
      top: 18px;
    }

    .bottom {
      transform: rotate(-45deg);
      bottom: 18px;
    }
  }
`;

export const Line = styled.span`
  display: inline-block;
  height: 3px;
  width: 100%;
  background: ${props => props.theme.colors.secundary};
  position: absolute;
  transition: all 0.3s;

  &.top {
    top: 0;
  }

  &.bottom {
    bottom: 0;
  }
`;
