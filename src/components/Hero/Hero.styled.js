import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  background: #c7cfdb;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 60px 126px;
  }
`;

export const ButtonRow = styled(Row)`
  width: 100%;
  padding: 1rem 0;
  justify-content: space-between;
  background: transparent;

  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`;

export const Column = styled.div`
  flex: 50%;
`;

export const Copy = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 34px;
  /* or 142% */

  color: #2b292d;
  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
