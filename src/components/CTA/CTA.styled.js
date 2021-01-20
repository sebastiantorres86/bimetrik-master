import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  @media only screen and (min-width: 768px) {
    height: 300px;
    padding: 2rem 126px;
    flex-direction: row;
  }
`;

export const Column = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    flex: 50%;
    display: flex;
    justify-content: center;
  }
`;

export const Heading = styled.h3`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  line-height: 40px;
  /* or 100% */

  letter-spacing: -0.25px;

  color: #2b292d;

  @media only screen and (min-width: 768px) {
    padding-right: 3rem;
    text-align: left;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 1rem;
  border: none;
  color: #fff;
  background: #1d3e6e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;
  :hover {
    background: rgba(29, 62, 110, 0.5);
    color: #1d3e6e;
    font-weight: 700;
  }
  :active {
    transform: translateY(4px);
  }
  :focus {
    outline: 0;
  }

  @media only screen and (min-width: 768px) {
    width: 200px;
    height: 60px;
    margin-bottom: 0;
  }
`;
