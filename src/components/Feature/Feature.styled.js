import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  @media only screen and (min-width: 768px) {
    padding: 1rem 3rem 2rem;
  }
`;

export const Heading = styled.h3`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 22px;
  line-height: 32px;
  /* or 145% */

  color: #2b292d;

  @media only screen and (min-width: 768px) {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

export const Copy = styled.p`
  font-family: Work Sans;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 32px;
  /* or 145% */

  color: #2b292d;
  margin-top: 0;
`;
