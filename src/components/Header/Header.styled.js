import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "nav-item-active";

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height, or 139% */

    text-align: center;

    color: #2b292d;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 1rem 1rem 2rem;
  background: #fff;

  @media only screen and (min-width: 768px) {
    height: 90px;
    padding: 2rem 126px 2rem;
    background: #c7cfdb;
  }
`;

export const Column = styled.div`
  flex: 50%;
`;

export const List = styled.ul`
  display: none;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  width: 120px;
  height: auto;
  padding-top: 15px;
  @media only screen and (min-width: 768px) {
    width: 200px;
    height: auto;
    padding: 0;
  }
`;
