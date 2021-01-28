import React from "react";
import { Row, Heading, Anchor, Button } from "./CTA.styled";

const CTA = () => {
  return (
    <Row>
      <Heading>Let's build something great together</Heading>

      <Anchor href="https://calendly.com/es" target="_blank" rel="noreferrer">
        <Button>Let's Connect! &rarr;</Button>
      </Anchor>
    </Row>
  );
};

export default CTA;
