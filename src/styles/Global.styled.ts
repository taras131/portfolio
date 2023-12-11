import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.styled";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: ${theme.colors.textPrimary}
  }

  button {
    border: none;
    background-color: white;
    cursor: pointer;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;