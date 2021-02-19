import React from 'react'
import { Container, Heading, Copy } from './Feature.styled'

const Feature = ({ feature }) => {
  return (
    <Container>
      <img src={feature.image} alt={feature.heading} />
      <Heading>{feature.heading}</Heading>
      <Copy>{feature.copy}</Copy>
    </Container>
  )
}

export default Feature
