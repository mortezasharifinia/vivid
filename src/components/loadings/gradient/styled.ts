import styled from 'styled-components'
import { StyledGradientLoadingProps } from './types';

export const Container = styled.div<StyledGradientLoadingProps>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    position: relative;
    width: ${props => props.size};
    height: ${props => props.size};
    background: ${props => props.bgColor};
    border: 6px solid ${props => props.bgColor};
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
                8px 8px 25px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    overflow: hidden;
    :before {
      content: '';
      position: absolute;
      inset: 40px;
      background: ${props => props.bgColor};
      border: 2px solid ${props => props.bgColor};
      border-radius: 50%;
      box-shadow: -8px -8px 25px rgba(255, 255, 255, 1),
                  8px 8px 25px rgba(0, 0, 0, 0.25),
                  inset 3px 3px 10px rgba(0, 0, 0, 0.1),
                  inset -1px -1px 15px rgba(255, 255, 255, 1);
      z-index: 1;  
    }
    i {
      position: absolute;
      inset: 0;
      background: linear-gradient(${props => props.gradientColors});
      border-radius: 50%;
      filter: blur(5px);
      animation: gradientAnimate 1s linear infinite;
    }
    @keyframes gradientAnimate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`