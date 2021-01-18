import React from "react";
import styled from "styled-components";

const Heading1 = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.2px;
`;

const Heading2 = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.2px;
`;

const Display1 = ({ displaytext }) => {
  return <Heading1>{displaytext}</Heading1>;
};

const Display2 = ({ displaytext }) => {
  return <Heading2>{displaytext}</Heading2>;
};

export {Display1, Display2}

