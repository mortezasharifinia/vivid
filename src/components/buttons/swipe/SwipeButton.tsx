import React from 'react'
import { SwipeButtonProps } from './types';
import { Container } from './styled';

function SwipeButton (props: SwipeButtonProps) {
  return (
    <Container 
      {...props}
      onClick={() => props.handleClick()}
      disabled={props.disabled}>
      { props.text }
      <span>
        <i className={props.icon}></i>
      </span>
    </Container>
  )
}

SwipeButton.defaultProps = {
  text: 'Swipe Button',
  icon: 'fa-solid fa-arrow-right',
  disabled: false,
  width: '200px',
  height: '60px',
  bgColor: '#403B42',
  color: '#939197',
  fontFamily: 'Poppins',
  letterSpacing: '2px',
  swipeBgColor: ' #04fe4d',
  disabledSwipeBgColor: '#ff5733',
  swipeIconColor: '#1a191d',
}

export default SwipeButton;