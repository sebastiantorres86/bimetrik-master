import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1rem;

  @media only screen and (min-width: 768px) {
    padding: 3rem 126px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  @media only screen and (min-width: 768px) {
    width: 66%;
    height: auto;
  }
`;
