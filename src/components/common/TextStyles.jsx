import React from "react";
import styled from "styled-components";

const Heading1 = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 72px;
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
