import {createGlobalStyle, css} from "styled-components";
import {theme} from "./Theme.styled";

// @ts-ignore
// @ts-ignore
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @media (prefers-reduced-motion: reduce) {
      animation: unset;
    }
  }

  *:focus-visible {
    outline: 2px solid ${theme.colors.accent};
  }

  body {
    font-family: 'Inter', sans-serif;
    color: ${theme.colors.textPrimary};
    line-height: 1.2;
    background-color: ${theme.colors.backgroundSecondary};
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
    color: ${theme.colors.textPrimary};
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    text-transform: capitalize;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    ${({ theme }) => css`
      color: ${theme.colors.accent};
    `};
 
  }

  span {
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
  }
`;