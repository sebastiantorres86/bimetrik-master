import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;
  background: #c7cfdb;

  @media only screen and (min-width: 768px) {
    padding: 2rem 126px;
  }
`;

export const Div = styled(Container)`
  background: #fff;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  flex: 100%;

  @media only screen and (min-width: 768px) {
    flex: 50%;
    padding-right: 1rem;
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
  margin: 0;
`;

export const Subheading = styled.h3`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  margin: 0;
  line-height: 25.6px;
  /* or 80% */

  color: #2b292d;
`;

export const Copy = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  margin: .5rem 0;
  line-height: 28.8px;
  /* or 160% */

  color: #2b292d;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 1rem;
`;

export const HowImage = styled(Image)`
  width: 250px;
  height: auto;
`
