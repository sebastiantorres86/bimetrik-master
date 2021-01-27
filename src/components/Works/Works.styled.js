import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  background: #fff;
  @media only screen and (min-width: 768px) {
    height: auto;
    padding: 1rem 126px;
    padding: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Column = styled.div`
  flex: 100%;

  @media only screen and (min-width: 768px) {
    flex: 33%;
    margin: 0;
  }
`;

export const Heading = styled.h2`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 46px;
  /* or 100% */

  text-align: center;
  letter-spacing: -0.5px;

  color: #2b292d;
  text-align: center;
`;

export const Button = styled.button``;
