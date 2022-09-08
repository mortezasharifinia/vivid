import React from 'react'
import { GradientLoadingProps } from './types';
import { Container } from './styled';

function GradientLoading (props: GradientLoadingProps) {
  return (
    <Container 
      {...props}>
      <span>
        <i></i>
      </span>
    </Container>
  )
}

GradientLoading.defaultProps = {
  size: '250px',
  bgColor: '#eaeef0',
  gradientColors: '#42abff, #ff4f8b, #ffeb3b',
}

export default GradientLoading;