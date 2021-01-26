import styled from "styled-components";
import Background from "../../assets/Macbook.svg";

export const Container = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    position: relative;
    margin-bottom: 5rem;
    width: 100%;
    height: 100vh;
    background: url(${Background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const TooltipAnchor1 = styled.div`
  position: absolute;
  top: 110px;
  left: 250px;
  cursor: pointer;
  font-size: 40px;
`;
export const TooltipAnchor2 = styled.p`
  position: absolute;
  top: 0px;
  right: 250px;
  cursor: pointer;
  font-size: 40px;
`;

export const TooltipAnchor3 = styled.p`
  position: absolute;
  top: 200px;
  left: 250px;
  cursor: pointer;
  font-size: 40px;
`;
export const TooltipAnchor4 = styled.p`
  position: absolute;
  bottom: 110px;
  right: 250px;
  cursor: pointer;
  font-size: 40px;
`;
export const TooltipAnchor5 = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
  font-size: 40px;
`;

export const TooltipAnchor6 = styled.p`
  position: absolute;
  bottom: 15px;
  right: 315px;
  cursor: pointer;
  font-size: 40px;
`;
