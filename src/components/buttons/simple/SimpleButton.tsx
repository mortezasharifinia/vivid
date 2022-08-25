import React from 'react'
import { SimpleButtonProps } from './types';
import { Container } from './styled';

function SimpleButton (props: SimpleButtonProps) {
  return (
    <Container>
      Test
    </Container>
  )
}

SimpleButton.defaultProps = {
}

export default SimpleButton;