import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Bimetriks Logo.svg";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
`;

const Column = styled.div`
  flex: 50%;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Row>
      <Column>
        <Link to="/">
          <Logo />
        </Link>
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
    </Row>
  );
};

export default Header;
