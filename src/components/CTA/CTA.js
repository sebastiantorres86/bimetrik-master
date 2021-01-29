import React from "react";
import { Link } from "react-router-dom";
import { Row, Heading, Button } from "./CTA.styled";

const CTA = ({content, link}) => {
  return (
    <Row>
      <Heading>Let's build something great together</Heading>

      <Link to={link}>
        <Button>{content}</Button>
      </Link>
    </Row>
  );
};

export default CTA;
