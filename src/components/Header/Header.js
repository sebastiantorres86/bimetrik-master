import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Column,
  List,
  StyledLink,
  LogoContainer,
  PreHeader
} from './Header.styled'
import Burger from '../Burger'
import Menu from '../Menu'
import { ButtonMain } from '../Button/Button'
import { useOnClickOutside } from '../../hooks'
import { ReactComponent as Logo } from '../../assets/Bimetriks Logo.svg'
import Mail from '../../assets/email.svg'

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <PreHeader>
        <img src={Mail} alt='mail' style={{ width: '20px' }} />{' '}
        <span>&nbsp; contact@bimetriks.com</span>
      </PreHeader>
      <Row>
        <Column>
          <Link to='/'>
            <LogoContainer>
              <Logo style={{ width: '100%' }} />
            </LogoContainer>
          </Link>
        </Column>
        <Column>
          <List>
            <li>
              <StyledLink exact to='/'>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to='/services'>Services</StyledLink>
            </li>
            <li>
              <StyledLink to='/about'>Our Company</StyledLink>
            </li>
            <li>
              <StyledLink to='/contact'>
                <ButtonMain content='Contact' />
              </StyledLink>
            </li>
          </List>
        </Column>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </Row>
    </>
  )
}

export default Header
