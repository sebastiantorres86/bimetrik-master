import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { ButtonMain } from "../Button/Button";

const activeClassName = "nav-item-active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    font-family: Work Sans;
    padding: 2rem 0;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height, or 139% */

    text-align: center;

    color: #2b292d;
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink to="/services">Services</StyledLink>
      <StyledLink to="/about">About Us</StyledLink>
      <StyledLink to="/contact">
        <ButtonMain content={"Contact"} />
      </StyledLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
