import React from 'react'
import {
  Container,
  Div,
  Row,
  Column,
  Subheading,
  Copy,
  Image,
  HowImage,
  Heading
} from './HeroServices.styled'
import Dashboard from '../../assets/CATALOG_IMAGE_20200720112743590.png'
import data from '../../assets/Data-pana.svg'
import report from '../../assets/Report-bro.svg'

const HowWeDoIt = () => {
  return (
    <Div>
      <Heading>How we do it</Heading>
      <Row>
        <Copy>
          We start by gathering your data and organize it in a way that is easy
          to access and review. Forget looking where a file is located or
          searching through folders to find the information you need. We have it
          covered!
        </Copy>

        <HowImage src={data} alt='data' />
      </Row>
      <Row>
        <HowImage src={report} alt='report' />
        <Copy>
          Next, we work with you to define metrics that will improve your
          business goals. Using your data, we design interactive reports that
          identify growth drivers and potential red flags. As time progresses,
          the <b>dynamic report updates automatically</b>, saving you both time
          and energy from having to evaluate each next step as new information
          appears. You will be able to easily navigate your data to better
          understand the fundamentals of your business.
        </Copy>
      </Row>
    </Div>
  )
}

const HeroServices = () => {
  return (
    <>
      <Container>
        <Row>
          <Column>
            <Subheading>What We Do</Subheading>
            <Copy>
              We understand that as organizations grow, the data and information
              that builds up can become overwhelming and disorganized, making it
              difficult to digest. This can cause business owners to feel
              disoriented and uncertain on how to make important business
              decisions.{' '}
              <b>
                We help small and medium businesses systematize and improve
                their data quality to access their information quickly and
                easily, eading to actionable insights that Will improve business
                performance
              </b>
            </Copy>
          </Column>
          <Column>
            <Image src={Dashboard} alt='Power BI dashboard' />
          </Column>
        </Row>
      </Container>
      <HowWeDoIt />
    </>
  )
}

export default HeroServices
