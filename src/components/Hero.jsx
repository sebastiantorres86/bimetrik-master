import React from "react";
import { Link } from "react-router-dom";
import { ButtonMain } from "./common/Button";
import { ButtonAlternative } from "./common/Button";
import Display1 from "./common/TextStyles";
import styled from "styled-components";
import HeroImage from "../assets/Site Stats (3).gif";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  background: #c7cfdb;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 60px 126px;
  }
`;

const ButtonRow = styled(Row)`
  width: 100%;
  padding: 1rem 0;
  justify-content: space-between;
  background: transparent;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
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
  /* or 142% */

  color: #2b292d;
  @media only screen and (min-width: 768px) {
    width: 66%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`

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
        <Image src={HeroImage} alt="" />
      </Column>
    </Row>
  );
};

export default Hero;
