import React from 'react'
import { Container, Parent, Div, Heading, Copy, Image } from './HowDo.styled'
import Image1 from '../../assets/analysis.svg'
import Image2 from '../../assets/analytics.svg'
import Image3 from '../../assets/metrics.svg'
import Image4 from '../../assets/business-report.svg'
import Image5 from '../../assets/insight.svg'

const data = [
  {
    image: Image1,
    alt: 'analysis',
    title: '1. Undertand your business',
    copy:
      'We understand the fundamentals of your business and define the drivers of your organization'
  },
  {
    image: Image2,
    alt: 'analytics',
    title: '2. Explore your data',
    copy:
      'We shape your data available to take value out of it. We access and organize your data to enhance its value'
  },
  {
    image: Image3,
    alt: 'metrics',
    title: '3. Define your metrics & KPIs',
    copy:
      'We define the most important metrics to measure the success of your business'
  },
  {
    image: Image4,
    alt: 'business report',
    title: '4. Dashboard Implementation',
    copy:
      'We design the perfect dashboard that will help you take action now to achieve your future goals'
  },
  {
    image: Image5,
    alt: 'insight',
    title: '5. Data-driven Insight',
    copy:
      'We understand the core of your business and define the drivers of your organization. We help you understand the core drivers of your business and identify opportunities to improve performance'
  }
]

const Card = ({ data }) => {
  return (
    <Div>
      <Image src={data.image} alt={data.alt} />
      <h3>{data.title}</h3>
      <Copy>{data.copy}</Copy>
    </Div>
  )
}

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
  )
}

export default HowDo
