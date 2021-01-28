import React from "react";
import {
  Container,
  Row,
  ColumnHeading,
  ColumnCopy,
  Subheading,
  Copy,
  Image,
  Blockquote,
  BlockquoteCopy,
  QuoteAuthor,
} from "./Mission.styled";
import HeroImage from "../../assets/About us page-amico.svg";
import Team from "../Team";

const Mission = () => {
  return (
    <Container>
      {/* <Heading>
        We empower innovators by delivering access to business insights
      </Heading> */}
      <Row>
        <ColumnHeading>
          <Subheading>Our Mission</Subheading>
          <Copy>
            Our main goal is to help organizations to build a strategic
            decision-making process to achieve their objetives. We do that
            exploring, analizing and creating actionable dashboards to undertand
            easily and efficiently the valuable data for the business. The
            result is an intelligent tool that gives everyone the ability to
            manage their data and solve big problems. We are deeply focused on
            democratizing business intelligence through technology.
          </Copy>
          <Subheading>Our Business</Subheading>
          <Copy>
            At the core of our platform is the tecnical infrastructure of
            Microsoft PowerBI. Our innovative service provides key insights for
            business and individuals, as well as robust reporting for
            traditional institutions.
          </Copy>
        </ColumnHeading>
        <ColumnCopy>
          <Image src={HeroImage} alt="about us" />
        </ColumnCopy>
      </Row>
      <Row>
        <ColumnHeading></ColumnHeading>
        <ColumnCopy></ColumnCopy>
      </Row>
      <Row>
        <ColumnHeading>
          <Subheading>Values</Subheading>
        </ColumnHeading>
        <ColumnCopy>
          <Copy>
            <b>Trust: </b>
            Build a long-term relationship with the client based on Honesty and
            Transparency.
          </Copy>
          <Copy>
            <b>Team: </b>Work as a team in every decision - "Work with".
          </Copy>
          <Copy>
            <b>Direct Relationship: </b>
            No intermediares involved. Client contacting directly to us.
          </Copy>
          <Copy>
            <b>Fluent Communication: </b>
            Feedback from the client to ensure our services works for them.
          </Copy>
          <Copy>
            <b>Fast Deliver: </b>Reach the agreed deadlines.
          </Copy>
        </ColumnCopy>
      </Row>
      <Row>
        <ColumnHeading>
          <Subheading>The Culture</Subheading>
        </ColumnHeading>
        <ColumnCopy>
          <Copy>
            We strongly believe there's always an opportunity to learn from each
            other outside fo day-to-day work , whether it's company-wide
            offsites, or co-workers meetups. We always value cross-team
            collaboration and diversity of thought, no matter the job title.
          </Copy>
        </ColumnCopy>
      </Row>
      <Team />
    
      <Row>
        <ColumnHeading>
          <Blockquote>
            <BlockquoteCopy>
              You can´t manage what you don´t measure.
            </BlockquoteCopy>
          </Blockquote>
          <QuoteAuthor>Peter Druker</QuoteAuthor>
        </ColumnHeading>
      </Row>
    </Container>
  );
};

export default Mission;
