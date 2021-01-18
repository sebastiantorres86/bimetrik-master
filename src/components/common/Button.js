import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 48px;
  margin-bottom: 1rem;
  border: none;
  color: #fff;
  background: #1d3e6e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  :active {
    transform: translateY(4px);
  }
  :focus {
    outline: 0;
  }

  @media only screen and (min-width: 768px) {
    width: 160px;
    height: 48px;
  }
`;

const ButtonWhite = styled(Button)`
  color: #1d3e6e;
  background: #fff;
`;

export const ButtonMain = ({ content }) => {
  return (
    <div>
      <Button>{content}</Button>
    </div>
  );
};

export const ButtonAlternative = ({ content }) => {
  return (
    <div>
      <ButtonWhite>{content}</ButtonWhite>
    </div>
  );
};
