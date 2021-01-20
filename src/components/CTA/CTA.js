import React from "react";
import { Row, Column, Heading, Button } from "./CTA.styled";

const CTA = () => {
  return (
    <Row>
      <Column>
        <Heading>Let's build something great together</Heading>
      </Column>
      <Column>
        <a href="https://calendly.com/es" target="_blank" rel="noreferrer">
          <Button>Schedule a Call</Button>
        </a>
      </Column>
    </Row>
  );
};

export default CTA;
