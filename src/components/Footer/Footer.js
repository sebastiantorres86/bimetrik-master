import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Column,
  List,
  Picture,
  SocialLink,
  Copy,
  SocialList,
  Copyright
} from './Footer.styled'
import { ReactComponent as Logo } from '../../assets/Bimetriks Logo White.svg'
import { ReactComponent as LogoTwitter } from '../../assets/twitter-forma-negra.svg'
import { ReactComponent as LogoLinkedin } from '../../assets/linkedin.svg'

const Footer = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Logo />
          <Copy>
            Creating a data-driven culture with business intelligence for
            everyone.
          </Copy>
        </Column>
        <Column>
          <List>
            <Link to='/'>
              <SocialLink>Home</SocialLink>
            </Link>
            <Link to='/services'>
              <SocialLink>Services</SocialLink>
            </Link>
            <Link to='/about'>
              <SocialLink>Our Company</SocialLink>
            </Link>
            <Link to='/contact'>
              <SocialLink>Contact</SocialLink>
            </Link>
          </List>
        </Column>
        <Column>
          <SocialList>
            <a href='https://twitter.com/home'>
              <Picture>
                <LogoTwitter />
              </Picture>
            </a>
            <a href='https://www.linkedin.com/company/bimetriks/'>
              <Picture>
                <LogoLinkedin />
              </Picture>
            </a>
          </SocialList>
          <Copyright>
            &copy;{new Date().getFullYear()} BiMetriks. All Rights Reserved
          </Copyright>
        </Column>
      </Row>
      {/* <Row>
        <Column>
          <Logo />
          <Copy>
            Creating a data-driven culture with business intelligence for
            everyone.
          </Copy>
        </Column>
        <Column>
          <List>
            <Link to="/">
              <SocialLink>Home</SocialLink>
            </Link>
            <Link to="/services">
              <SocialLink>Services</SocialLink>
            </Link>
            <Link to="/about">
              <SocialLink>About Us</SocialLink>
            </Link>
            <Link to="/contact">
              <SocialLink>Contact</SocialLink>
            </Link>
          </List>
        </Column>
        <Column>
          <SocialList>
            <a href="https://twitter.com/home">
              <Picture>
                <LogoTwitter />
              </Picture>
            </a>
            <a href="https://www.linkedin.com/feed/">
              <Picture>
                <LogoLinkedin />
              </Picture>
            </a>
          </SocialList>
          <Copyright>
            &copy;{new Date().getFullYear()} BiMetriks. All Rights Reserved
          </Copyright>
        </Column>
      </Row> */}

      {/* <List>
          <Link to="/">
            <SocialLink>Home</SocialLink>
          </Link>
          <Link to="/services">
            <SocialLink>Services</SocialLink>
          </Link>
          <Link to="/about">
            <SocialLink>About Us</SocialLink>
          </Link>
          <Link to="/contact">
            <SocialLink>Contact</SocialLink>
          </Link>
        </List> */}

      {/* <Copyright>
          &copy;{new Date().getFullYear()} BiMetriks. All Rights Reserved
        </Copyright> */}
    </Container>
  )
}

export default Footer
