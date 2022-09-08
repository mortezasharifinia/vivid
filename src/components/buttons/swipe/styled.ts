import styled from 'styled-components'
import { StyledSwipeButtonProps } from './types';

export const Container = styled.button<StyledSwipeButtonProps>`
  box-sizing: border-box;
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  color: rgba(255, 255, 255, 0.5);
  background: ${props => props.bgColor};
  border: none;
  border-top: 0.5px solid rgba(255, 255, 255, 0.35);
  border-left: 0.5px solid rgba(255, 255, 255, 0.35);
  border-radius: ${props => props.height};
  font-family: ${props => props.fontFamily}, sans-serif;
  letter-spacing: ${props => props.letterSpacing};
  padding-left: ${props => props.height};
  padding-right: 0;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(-500%, -50%) skewX(30deg);
    width: 25%;
    height: 110%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 1;
    transition: 0.8s ease-in-out
  }
  :active {
    color: rgba(255, 255, 255, 1);
    padding-left: 0;
    padding-right: ${props => props.height};
    &:after {
      transform: translate(200%, -50%) skewX(30deg);
    }
    span {
      left: calc(101% - ${props => props.height});
    }
  }
  :disabled {
    cursor: not-allowed;
    color: rgba(255, 255, 255, 0.5);
    padding-left: ${props => props.height};
    padding-right: 0;
    &:after {
      transform: translate(200%, -50%) skewX(30deg);
    }
    span {
      left: 5px;
      background: ${props => props.disabledSwipeBgColor};
    }
  }
  span {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    width: calc(${props => props.height} - 10px);
    height: calc(${props => props.height} - 10px);
    background: ${props => props.swipeBgColor};
    color: ${props => props.swipeIconColor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: 0.5s ease-in-out;
  }
`