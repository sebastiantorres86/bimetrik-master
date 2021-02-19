import React from 'react'
import { Container, Image } from './Card.styled'

const Card = ({ feature }) => {
  return (
    <Container>
      <Image src={feature.image} alt='#' />
      <h3>{feature.title}</h3>
      <p>{feature.copy}</p>
    </Container>
  )
}

export default Card
