import React from 'react'
import { GlowingButtonProps } from './types';
import { Container } from './styled';

function GlowingButton (props: GlowingButtonProps) {
  return (
    <Container 
      {...props}
      onClick={() => props.handleClick()}>
      <span>{ props.text }</span>
      <i></i>
    </Container>
  )
}

GlowingButton.defaultProps = {
  text: 'Glowing Button',
  bgColor: '#444',
  changedBgColor: '#ff1867',
  color: '#fff',
  fontFamily: 'Poppins',
  fontSize: '1.5rem',
  letterSpacing: '0.15rem'
}

export default GlowingButton;