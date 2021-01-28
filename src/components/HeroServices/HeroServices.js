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
          <Image src={Dashboard} alt="Power BI dashboard" />
        </Column>
        <Column>
          <Subheading>How we do it</Subheading>
          <Copy>
            Firstly, we start by{" "}
            <b>gathering all of the data and organize it</b> in a way that is
            easy to consume. Forget looking where a file is located or searching
            through folders to find the information you need. We have it
            covered!
          </Copy>
          <Copy>
            Next, we work with you to <b>define metrics</b> that will improve
            your business goals using the data. We
            <b>design an interactive report</b>
            that makes it easy to detect growth, stability and red flags. As
            time progresses, the <b>dynamic report updates automatically</b> ,
            saving you both time and energy from having to evaluate each next
            step as new information appears. You will be able to easily navigate
            the details and interactions of your data to better understand the
            ins and outs of your business.
          </Copy>
        </Column>
      </Row>
    </Container>
  );
};

export default HeroServices;
