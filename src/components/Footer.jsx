import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Bimetriks Logo White.svg";
import { ReactComponent as LogoTwitter } from "../assets/twitter.svg";
import { ReactComponent as LogoLinkedin } from "../assets/linkedin.svg";

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem 5rem;
  background-color: #a2d0c1;
`;

const Column = styled.div`
  flex: 33%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Picture = styled.div`
  width: 25px;
  height: auto;
`;

const Footer = () => {
  return (
    <Row>
      <Column>
        <Logo />
      </Column>
      <Column>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </List>
      </Column>
      <Column>
        <List>
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
        </List>
      </Column>
    </Row>
  );
};

export default Footer;
