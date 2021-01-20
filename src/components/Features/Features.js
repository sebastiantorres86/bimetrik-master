import React from "react";
import { Container, Row, Column, Heading } from "./Features.styled";
import Feature from "../Feature";
import FeatureImage1 from "../../assets/Data report-amico.svg";
import FeatureImage2 from "../../assets/Data Trends-amico.svg";
import FeatureImage3 from "../../assets/Report-amico.svg";

const features = [
  {
    image: FeatureImage1,
    heading: "Business and data recovery",
    copy:
      "Explore the data available and discover the Business Drivers of your organization",
  },
  {
    image: FeatureImage2,
    heading: "Metrics and KPI definition",
    copy: "Define the key parameters that measure success of your business",
  },
  {
    image: FeatureImage3,
    heading: "Reporting and data visualization",
    copy:
      "Design and create visual reports that best fit with your business goals",
  },
];

const Features = () => {
  return (
    <Container>
      <Heading>Grow your business with better information</Heading>
      <Row>
        {features.map((feature, i) => (
          <Column>
            <Feature key={i} feature={feature} />
          </Column>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
