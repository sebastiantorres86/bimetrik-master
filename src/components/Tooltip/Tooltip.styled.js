import styled from "styled-components";
import Background from "../../assets/Macbook.svg";

export const Div = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`

export const Container = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    position: relative;
    position: center;
    margin: 0 auto 5rem;
    width: 100%;
    height: 60vh;
    background: url(${Background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Heading = styled.h2`
  margin: 0 0 1rem;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  /* or 100% */

  letter-spacing: -0.357143px;

  color: #2b292d;

  @media only screen and (min-width: 768px) {
    font-size: 46px;
    line-height: 46px;
    /* or 100% */

    text-align: center;
    letter-spacing: -0.5px;
  }
`;

export const Copy = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`

export const TooltipAnchor1 = styled.div`
  position: absolute;
  top: 35px;
  left: 380px;
  cursor: pointer;
  font-size: 40px;
`;
export const TooltipAnchor2 = styled.p`
  position: absolute;
  top: -50px;
  right: 370px;
  cursor: pointer;
  font-size: 40px;
`;

export const TooltipAnchor3 = styled.p`
  position: absolute;
  top: 50px;
  left: 450px;
  cursor: pointer;
  font-size: 40px;
`;
export const TooltipAnchor4 = styled.p`
  position: absolute;
  top: 40%;
  right: 395px;
  cursor: pointer;
  font-size: 40px;
`;
export const TooltipAnchor5 = styled.p`
  position: absolute;
  top: 40%;
  left: 400px;
  cursor: pointer;
  font-size: 40px;
`;

export const TooltipAnchor6 = styled.p`
  position: absolute;
  bottom: -35px;
  right: 455px;
  cursor: pointer;
  font-size: 40px;
`;
