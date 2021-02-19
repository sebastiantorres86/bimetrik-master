import React from 'react'
import { Container, Row, Heading, Button } from './Contact.styled'
import { ContactForm } from '../../components'

const CTA = ({ content, href }) => {
  return (
    <Row>
      <Heading>Let's build something great together</Heading>

      <a href={href} target='_blank' rel='noreferrer'>
        <Button>{content}</Button>
      </a>
    </Row>
  )
}

const Contact = () => {
  return (
    <Container>
      <ContactForm />
      <CTA content='Schedule a Call' href='https://calendly.com/bimetriks/discovery-meeting' />
    </Container>
  )
}

export default Contact
