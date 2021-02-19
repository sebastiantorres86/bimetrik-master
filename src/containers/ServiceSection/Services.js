import React from 'react'
import { HeroServices, HowDo, CTA } from '../../components'

const Services = () => {
  return (
    <>
      <HeroServices />
      <HowDo />
      <CTA content={"Let's Connect! →"} link='/contact' />
    </>
  )
}

export default Services
