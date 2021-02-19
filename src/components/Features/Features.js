import React from 'react'
import { Container, Row, Column, Heading } from './Features.styled'
import Feature from '../Feature'
import FeatureImage1 from '../../assets/Data report-amico.svg'
import FeatureImage2 from '../../assets/Data Trends-amico.svg'
import FeatureImage3 from '../../assets/Report-amico.svg'

const features = [
  {
    image: FeatureImage1,
    heading: 'Business review and data capture',
    copy:
      'Explore and organize the data that drives your business to make it actionable'
  },
  {
    image: FeatureImage2,
    heading: 'Metrics and KPI definition',
    copy: 'Define the key parameters that measure your business success'
  },
  {
    image: FeatureImage3,
    heading: 'Data visualization and insights driven reports',
    copy:
      'Design and create visual reports that fit your business goals to make data-driven decisions'
  }
]

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
  )
}

export default Features
