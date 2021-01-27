import React from "react";
import { Container, Row, Heading } from "./Works.styled";
import Card from "../Card";
import auricular from "../../assets/auricular.svg";
import handshake from "../../assets/handshake.svg";
import check from "../../assets/check.svg";

const features = [
  {
    image: auricular,
    title: "Let's Have a Chat",
    copy: "Send us an email or set a meeting to discovery each other",
  },
  {
    image: handshake,
    title: "Proposal",
    copy:
      "Let discuss how the service fix to your business, and we will send you a proposal/contract by email.",
  },
  {
    image: check,
    title: "Let's Start Working",
    copy:
      "Once we get the document signed, let's start working on the project.",
  },
];

const Works = () => {
  return (
    <Container>
      <Heading>How it works?</Heading>
      <Row>
        {features.map((feature, i) => (
          <Card key={i} feature={feature} />
        ))}
      </Row>

      
    </Container>
  );
};

export default Works;
