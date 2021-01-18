import React from "react";
import styled from "styled-components";

const Heading1 = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 50px;
  /* or 100% */

  letter-spacing: -0.3125px;

  color: #2b292d;
  @media only screen and (min-width: 768px) {
    margin: 0 0 34px;
    font-size: 80px;
    line-height: 78px;
    /* or 97% */

    letter-spacing: -0.5px;
  }
`;

// const Heading2 = styled(Heading1)`
//   font-size: 60px;
// `;

const Display1 = ({ content }) => {
  return <Heading1>{content}</Heading1>;
};

// function Display2({ content }) {
//   return <Heading2>{content}</Heading2>;
// }

export default Display1;
