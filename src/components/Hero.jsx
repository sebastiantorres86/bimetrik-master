import React from "react";
import { Link } from "react-router-dom";
import { ButtonMain } from "./common/Button";
import { ButtonAlternative } from "./common/Button";
import Display1 from "./common/TextStyles";
import styled from "styled-components";
import HeroImage from "../assets/Site Stats (3).gif";

const Row = styled.div`
  display: flex;
  padding: 1rem 5rem;
  background: #c7cfdb;
`;

const ButtonRow = styled(Row)`
  width: 60%;
  padding: 1rem 0;
  justify-content: space-between;
  background: transparent;
`;

const Column = styled.div`
  flex: 50%;
`;

const Copy = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.2px;

  color: #000000;
  width: 66%;
`;

const Hero = () => {
  return (
    <Row>
      <Column>
        <Display1 content={"From data to Business Insights"} />
        <Copy>
          Translate your raw-data into Interactive Reports for strategic
          decision-making
        </Copy>
        <ButtonRow>
          <Link to="/contact">
            <ButtonMain content={"Contact"} />
          </Link>
          <Link to="/services">
            <ButtonAlternative content={"Learn More"} />
          </Link>
        </ButtonRow>
      </Column>
      <Column>
        <img src={HeroImage} alt=""/>
      </Column>
    </Row>
  );
};

export default Hero;
