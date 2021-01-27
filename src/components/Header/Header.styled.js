import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "nav-item-active";

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
position: relative;
:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #0f1f37;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
:hover:after { 
  width: 100%; 
  left: 0; 
}
  :hover {
    color: #0f1f37;
    font-weight: bold;
    font-size: 20px;
  }
  &.${activeClassName} {
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;

    /* identical to box height, or 139% */

    text-align: center;

    color: #0f1f37;
  }
`;

export const PreHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #1d3e6e;
  height: 35px;
  color: #fff;
  padding: 0 1rem;

  @media only screen and (min-width: 768px) {
    padding: 0.5rem 126px;
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
    background: #fff;
  }
`;

export const Column = styled.div`
  flex: 50%;
`;

export const List = styled.ul`
  display: none;
  justify-content: space-between;
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
