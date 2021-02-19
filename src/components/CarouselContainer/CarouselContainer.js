import React from 'react'
import { Container } from './Carousel.styled'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import dashboard1 from '../../assets/dashboard1.jpg'
import dashboard2 from '../../assets/dashboard2.jpg'
import dashboard3 from '../../assets/dashboard3.png'
import dashboard4 from '../../assets/dashboard4.png'
import dashboard5 from '../../assets/dashboard5.jpg'

const CarouselContainer = () => {
  return (
    <Container>
      <AwesomeSlider>
        <div data-src={dashboard1} />
        <div data-src={dashboard2} />
        <div data-src={dashboard3} />
        <div data-src={dashboard4} />
        <div data-src={dashboard5} />
      </AwesomeSlider>
    </Container>
  )
}

export default CarouselContainer
