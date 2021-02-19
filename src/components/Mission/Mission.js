import React from 'react'
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
  QuoteAuthor
} from './Mission.styled'
import HeroImage from '../../assets/About us page-amico.svg'
import values from '../../assets/values.PNG'
import Team from '../Team'

const Mission = () => {
  return (
    <Container>
      <RowOdd>
        <ColumnHeading>
          <Subheading>Our Mission</Subheading>
          <Copy>
            Our goal is to help organizations to build a data-driven strategic
            decision-making process to achieve their objetives. We do that by
            exploring, analyzing and creating actionable data dashboards. The
            result is an intelligent tool that gives business of all sizes the
            ability to manage their data and solve big problems. We are deeply
            focused on democratizing business intelligence through technology.
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
          <Image src={HeroImage} alt='about us' />
        </ColumnCopy>
      </RowOdd>
      <RowEven>
        <ColumnHeading>
          <Subheading>Values</Subheading>
          <Image src={values} alt='values' />
        </ColumnHeading>
        <Ul>
          <Item>
            <b>Trust: </b>
            Our goal is to build a long-term relationship with our client based
            on honesty and transparency.
          </Item>
          <Item>
            <b>Team: </b>We work as a team at every decision point.
          </Item>
          <Item>
            <b>Direct Relationship: </b>
            AS principals, we have direct involvement with our clients.
          </Item>
          <Item>
            <b>Fluent Communication: </b>
            We seek continuous feedback to ensure our services are meeting
            client needs.
          </Item>
          <Item>
            <b>Timely Delivery: </b> We create detailed timelines and commit to
            meeting deadlines.
          </Item>
        </Ul>
      </RowEven>
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
      <Team />
    </Container>
  )
}

export default Mission
