import React from "react";
import {
  Container,
  Row,
  ColumnHeading,
  ColumnCopy,
  Heading,
  Subheading,
  Copy,
  Image,
  AvatarContainer,
  Avatar,
  Blockquote,
  BlockquoteCopy,
  QuoteAuthor,
} from "./Mission.styled";
import image from "../../assets/data-has-a-better-idea.jpg";
import Ariel from "../../assets/Ariel.jpg";
import Federico from "../../assets/Federico.jpg";

const Mission = () => {
  return (
    <Container>
      <Heading>
        We empower innovators by delivering access to business insights
      </Heading>
      <Row>
        <ColumnHeading>
          <Subheading>Our Mission</Subheading>
        </ColumnHeading>
        <ColumnCopy>
          <Copy>
            Our main goal is to help organizations to build a strategic
            decision-making process to achieve their objetives. We do that
            exploring, analizing and creating actionable dashboards to undertand
            easily and efficiently the valuable data for the business. The
            result is an intelligent tool that gives everyone the ability to
            manage their data and solve big problems. We are deeply focused on
            democratizing business intelligence through technology.
          </Copy>
        </ColumnCopy>
      </Row>
      <Row>
        <ColumnHeading>
          <Subheading>Our Business</Subheading>
        </ColumnHeading>
        <ColumnCopy>
          <Copy>
            At the core of our platform is the tecnical infrastructure of
            Microsoft PowerBI. Our innovative service provides key insights for
            business and individuals, as well as robust reporting for
            traditional institutions.
          </Copy>
        </ColumnCopy>
      </Row>
      <Image src={image} alt="data has a better idea" />
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
      <Row>
        <ColumnHeading>
          <Subheading>The People</Subheading>
          <AvatarContainer>
            <Avatar src={Ariel} alt="Ariel" />
            <Avatar src={Federico} alt="Federico" />
          </AvatarContainer>
        </ColumnHeading>
        <ColumnCopy>
          <Copy>
            We're all passionate about building a more efficient and inclusive
            business intelligence together. At BiMetriks, we have diverse
            backgrounds and skills.
          </Copy>
          <Copy>
            We are Ariel and Federico, two friends from the small coastal city
            of Mar del Plata, Argentina. After earning degrees in Economics and
            Industrial Engineering and cutting our teeth with small and mid-size
            businesses (SMBs), we moved to Buenos Aires to gain experience in
            multinational companies.
          </Copy>
          <Copy>
            We are now committed to developing direct relationships with (SMBs)
            who are interested in applying to their operations the data
            analytics of larger corporations. In particular, SMBs understand the
            value of data analytics, but often lack the resources needed to
            develop executable plans from that data.
          </Copy>
          <Copy>
            To this end, we founded BiMetriks. BiMetriks is dedicated to helping
            SMBs gather, distill and present actionable data without spending a
            fortune on a business intelligence team.
          </Copy>
          <Copy>
            Our promise is to help clients make better data-driven decisions.
          </Copy>
        </ColumnCopy>
      </Row>
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
