import React from 'react'
import { Div, Image } from './NotFound.styled'
import imageNotFound from '../../assets/404.png'

const NotFound = () => {
  return (
    <Div>
      <Image src={imageNotFound} alt='' />
    </Div>
  )
}

export default NotFound
