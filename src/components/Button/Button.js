import React from "react";
import {Button, ButtonWhite, ButtonCall} from './Button.styled'

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

export const ButtonCTA = ({ content }) => {
  return (
    <div>
      <ButtonCall>{content}</ButtonCall>
    </div>
  );
};
