import React from "react";
import { Link } from "react-router-dom";
import { Row, Column, ButtonRow, Copy, Image } from "./Hero.styled";
import { ButtonMain } from "../Button/Button";
import { ButtonAlternative } from "../Button/Button";
import { Display1 } from "../Button/TextStyles";
import HeroImage from "../../assets/Site Stats (3).gif";

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
            <ButtonAlternative content={"Our Services"} />
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
