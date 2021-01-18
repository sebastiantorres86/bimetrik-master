import React from "react";
import Button from "./common/Button";
import styled from "styled-components";
import { ReactComponent as HeroImage } from "../assets/Site Stats-amico.svg";

const Row = styled.div`
  display: flex;
  padding: 1rem 5rem;
`;

const Column = styled.div`
  flex: 50%;
`;

const Hero = () => {
  return (
    <Row>
      <Column>
        <h1>From data to business insights</h1>
        <p>
          Translate your raw-data into Interactive Reports for strategic
          decision-making
        </p>
        <Row>
          <Button content={"Contact"} />
          <Button content={"Learn More"} />
        </Row>
      </Column>
      <Column>
        <HeroImage />
      </Column>
    </Row>
  );
};

export default Hero;
