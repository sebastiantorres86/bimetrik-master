import React from "react";
import {
  Container,
  RowEven,
  RowOdd,
  ColumnHeading,
  ColumnCopy,
  Subheading,
  Ul,
  Item,
  Copy,
  Image,
  Blockquote,
  BlockquoteCopy,
  QuoteAuthor,
} from "./Mission.styled";
import HeroImage from "../../assets/About us page-amico.svg";
import values from '../../assets/values.PNG'
import Team from "../Team";

const Mission = () => {
  return (
    <Container>
      {/* <Heading>
        We empower innovators by delivering access to business insights
      </Heading> */}
      <RowOdd>
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
      </RowOdd>
      <RowEven>
        <ColumnHeading>
          <Subheading>Values</Subheading>
          <Image src={values} alt="values" />
        </ColumnHeading>
        <Ul>
          <Item>
            <b>Trust: </b>
            Build a long-term relationship with the client based on Honesty and
            Transparency.
          </Item>
          <Item>
            <b>Team: </b>Work as a team in every decision - "Work with".
          </Item>
          <Item>
            <b>Direct Relationship: </b>
            No intermediares involved. Client contacting directly to us.
          </Item>
          <Item>
            <b>Fluent Communication: </b>
            Feedback from the client to ensure our services works for them.
          </Item>
          <Item>
            <b>Fast Deliver: </b>Reach the agreed deadlines.
          </Item>
        </Ul>
      </RowEven>
      <RowOdd>
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
      </RowOdd>
      <Team />

      <RowOdd>
        <ColumnHeading>
          <Blockquote>
            <BlockquoteCopy>
              You can´t manage what you don´t measure.
              <QuoteAuthor>Peter Druker</QuoteAuthor>
            </BlockquoteCopy>
          </Blockquote>
        </ColumnHeading>
      </RowOdd>
    </Container>
  );
};

export default Mission;
