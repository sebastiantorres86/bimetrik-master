import React, { useState } from "react";
import {
  Container,
  Heading,
  Label,
  Input,
  Textarea,
  Form,
  Button,
} from "./ContactForm.styled";
import axios from "axios";

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mqkgnlzj",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          type="name"
          name="name"
          onChange={handleOnChange}
          required
          value={inputs.name}
        />
        <Label htmlFor="email">Your Email Address</Label>
        <Input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          placeholder="something@email.com"
        />
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          placeholder="Your message starts with..."
        />
        <Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Send a Message"
              : "Submitted"
            : "Submitting..."}
        </Button>
      </Form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </Container>
  );
};

export default ContactForm;
