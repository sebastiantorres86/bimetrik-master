import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 1rem 2rem;
  background: #f5f5f5;

  @media only screen and (min-width: 768px) {
    padding: 3rem 126px;
    height: auto;
  }
`;

export const Parent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 275px;
  }
`;

export const Heading = styled.h2`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  /* or 100% */

  text-align: center;
  letter-spacing: -0.5px;

  color: #2b292d;
  margin: 0;
  padding: 0 0 1rem;
`;

export const Subheading = styled.h2`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  /* or 100% */

  color: #2b292d;
`;

export const Copy = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 18px;
  line-height: 28.8px;
  /* or 160% */

  color: #2b292d;
  margin-top: 0;
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
  padding: 0 3rem;
`;
