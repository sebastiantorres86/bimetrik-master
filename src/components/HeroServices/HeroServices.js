import React from "react";
import {
  Container,
  Row,
  Column,
  Subheading,
  Copy,
  Image,
} from "./HeroServices.styled";
import Dashboard from "../../assets/CATALOG_IMAGE_20200720112743590.png";

const HeroServices = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Subheading>What is Business Intelligence?</Subheading>
          <Copy>
            A quantitative system that illustrates easy-to-digest, actionable
            and productive information that provides insights into your
            business.
          </Copy>
        </Column>
        <Column>
          <Image src={Dashboard} alt="Power BI dashboard" />
        </Column>
      </Row>
    </Container>
  );
};

export default HeroServices;
