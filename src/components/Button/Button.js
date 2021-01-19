import React from "react";
import {Button, ButtonWhite} from './Button.styled'

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
