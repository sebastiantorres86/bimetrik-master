import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Column,
  List,
  Picture,
  SocialLink,
  Copy,
  Heading,
  SocialList,
} from "./Footer.styled";
import { ReactComponent as Logo } from "../../assets/Bimetriks Logo White.svg";
import { ReactComponent as LogoTwitter } from "../../assets/twitter-forma-negra.svg";
import { ReactComponent as LogoLinkedin } from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <Row>
      <Column>
        <Logo />
        <Copy>
          Creating a data-driven culture with business intelligence for
          everyone.
        </Copy>
      </Column>
      <Column>
        <Heading>Site Map</Heading>
        <List>
          <li>
            <Link to="/">
              <SocialLink>Home</SocialLink>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <SocialLink>Services</SocialLink>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <SocialLink>About Us</SocialLink>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <SocialLink>Contact</SocialLink>
            </Link>
          </li>
        </List>
      </Column>
      <Column>
        <Heading>Social</Heading>
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
      </Column>
    </Row>
  );
};

export default Footer;
