import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  background: #1d3e6e;
  height: 75vh;

  @media only screen and (min-width: 768px) {
    height: 250px;
    padding: 2rem 126px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Column = styled.div`
  flex: 100%;
  text-align: center;

  @media only screen and (min-width: 768px) {
    flex: 33%;
    text-align: left;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  color: #fff;
`;

export const SocialList = styled(List)`
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SocialLink = styled.li`
  color: #fff;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const Picture = styled.div`
  width: 30px;
  height: auto;

  @media only screen and (min-width: 768px) {
    margin-right: 1.5rem;
  }
`;

export const Copy = styled.p`
  color: #fff;
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 768px) {
    text-align: left;
    padding-right: 2rem;
  }
`;

export const Heading = styled.h2`
  font-size: 32px;
  color: #fff;
  margin-top: 0;
`;

export const Copyright = styled.small`
  color: #fff;
`;
