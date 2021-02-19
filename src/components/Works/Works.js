import React from 'react'
import { Container, Row, Heading } from './Works.styled'
import Card from '../Card'
import auricular from '../../assets/auricular.svg'
import handshake from '../../assets/handshake.png'
import check from '../../assets/check.svg'
import { ButtonCTA } from '../Button/Button'
import { Link } from 'react-router-dom'

const features = [
  {
    image: auricular,
    title: "Let's Have a Chat",
    copy: 'Send us an email or set a meeting to discovery each other'
  },
  {
    image: handshake,
    title: 'Customized approach',
    copy:
      'We Will prepare a proposal designed to meet your unique business goals'
  },
  {
    image: check,
    title: "Let's Start Working",
    copy:
      "Once we get the document signed, let's start working on the project."
  }
]

const Works = () => {
  return (
    <Container>
      <Heading>Let´s get started</Heading>
      <Row>
        {features.map((feature, i) => (
          <Card key={i} feature={feature} />
        ))}
      </Row>

      <Link to='/contact'>
        <ButtonCTA content="Let's Connect! &rarr;" />
      </Link>
    </Container>
  )
}

export default Works
