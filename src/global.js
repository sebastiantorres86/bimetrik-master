import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    text-rendering: optimizeLegibility;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 50px;
    /* or 100% */

    letter-spacing: -0.3125px;

    color: ${({ theme }) => theme.letterBlack};
    @media only screen and (min-width: 768px) {
      margin: 0 0 34px;
      font-size: 80px;
      line-height: 78px;
      /* or 97% */

      letter-spacing: -0.5px;
    }
  }

  a {
    text-decoration: none;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height, or 139% */

    text-align: center;

    color: #2B292D;
  }

  li {
    list-style-type: none;
  }

`;
