import React from "react";
import { Container, Parent, Div, Heading, Copy, Image } from "./HowDo.styled";
import Image1 from "../../assets/analysis.svg";
import Image2 from "../../assets/analytics.svg";
import Image3 from "../../assets/metrics.svg";
import Image4 from "../../assets/business-report.svg";
import Image5 from "../../assets/insight.svg";

const data = [
  {
    image: Image1,
    alt: "analysis",
    title: "1. Undertand your business",
    copy:
      "We understand the core of your business and define the drivers of your organization",
  },
  {
    image: Image2,
    alt: "analytics",
    title: "2. Explore your data",
    copy: "We shape your data available to take value out of it",
  },
  {
    image: Image3,
    alt: "metrics",
    title: "3. Define your metrics & KPI",
    copy:
      "We define what are the most important metric that will measure the success of your business",
  },
  {
    image: Image4,
    alt: "business report",
    title: "4. Implement Dashboard",
    copy:
      "We design the perfect dashboard that will help you to take action now to achieve your goals in the future",
  },
  {
    image: Image5,
    alt: "insight",
    title: "5. Give you data-insights",
    copy:
      "We understand the core of your business and define the drivers of your organization",
  },
];

const Card = ({ data }) => {
  return (
    <Div>
      <Image src={data.image} alt={data.alt} />
      <h3>{data.title}</h3>
      <Copy>{data.copy}</Copy>
    </Div>
  );
};

const HowDo = () => {
  return (
    <Container>
      <Heading>Our Process</Heading>
      <Parent>
        {data.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </Parent>
    </Container>
  );
};

export default HowDo;
