import React from "react";
import {
  Container,
  Row,
  ColumnOdd,
  ColumnEven,
  Heading,
  Subheading,
  Copy,
  Image,
} from "./HowDo.styled";
import Image1 from "../../assets/analysis.svg";
import Image2 from "../../assets/analytics.svg";
import Image3 from "../../assets/metrics.svg";
import Image4 from "../../assets/business-report.svg";
import Image5 from "../../assets/insight.svg";

const HowDo = () => {
  return (
    <Container>
      <Heading>How do we do it</Heading>
      <Row>
        <ColumnOdd>
          <Image src={Image1} alt="analysis" />
        </ColumnOdd>
        <ColumnEven>
          <Subheading>1. Undertand your business</Subheading>
          <Copy>
            We understand the core of your business and define the drivers of
            your organization
          </Copy>
        </ColumnEven>
      </Row>
      <Row>
        <ColumnEven>
          <Image src={Image2} alt="analytics" />
        </ColumnEven>
        <ColumnOdd>
          <Subheading>2. Explore your data</Subheading>
          <Copy>We shape your data available to take value out of it</Copy>
        </ColumnOdd>
      </Row>
      <Row>
        <ColumnOdd>
          <Image src={Image3} alt="metrics" />
        </ColumnOdd>
        <ColumnEven>
          <Subheading>3. Define your metrics & KPI</Subheading>
          <Copy>
            We define what are the most important metric that will measure the
            success of your business
          </Copy>
        </ColumnEven>
      </Row>
      <Row>
        <ColumnEven>
          <Image src={Image4} alt="business report" />
        </ColumnEven>
        <ColumnOdd>
          <Subheading>4. Implement Dashboard</Subheading>
          <Copy>
            We design the perfect dashboard that will help you to take action
            now to achieve your goals in the future
          </Copy>
        </ColumnOdd>
      </Row>
      <Row>
        <ColumnOdd>
          <Image src={Image5} alt="insight" />
        </ColumnOdd>
        <ColumnEven>
          <Subheading>5. Give you data-insights</Subheading>
          <Copy>
            We give you a quick overview of your dashboard and give you
            important insights
          </Copy>
        </ColumnEven>
      </Row>
    </Container>
  );
};

export default HowDo;
