import React from "react";
import {Container} from './Contact.styled'
import { ContactForm, CTA } from "../../components";

const Contact = () => {
  return (
    <Container>
      <ContactForm />
      <CTA />
    </Container>
  );
};

export default Contact;
