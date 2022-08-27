import styled from 'styled-components'
import { StyledGlowingButtonProps } from './types';

export const Container = styled.button<StyledGlowingButtonProps>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  position: relative;
  background: ${props => props.bgColor};
  color: ${props => props.color};
  border: none;
  text-transform: uppercase;
  font-family: ${props => props.fontFamily}, sans-serif;
  font-size: ${props => props.fontSize};
  letter-spacing: ${props => props.letterSpacing};
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;
  :hover {
    color: ${props => props.changedBgColor};
    background: ${props => props.changedBgColor};
    box-shadow: 0 0 35px ${props => props.changedBgColor};
    letter-spacing: calc(${props => props.letterSpacing} * 2);
    i:before {
      left: 0%;
      transform: translateX(-50%) rotate(45deg);
      border: 2px solid ${props => props.changedBgColor};
    }
    i:after {
      left: 100%;
      transform: translateX(-50%) rotate(45deg);
      border: 2px solid ${props => props.changedBgColor};
    }
  }
  &:before {
    content: '';
    position: absolute;
    inset: 2px;
    background: ${props => props.bgColor};
  }
  span {
    position: relative;
    z-index: 1;
  }
  i {
    position: absolute;
    inset: 0;
    display: block;
  }
  i:before {
    content: '';
    position: absolute;
    top: -6px;
    left: 100%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: ${props => props.bgColor};
    border: 2px solid ${props => props.color};
    transition: 0.5s;
  }
  i:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: ${props => props.bgColor};
    border: 2px solid ${props => props.color};
    transition: 0.5s;
  }
`