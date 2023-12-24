// @ts-ignore
import {createGlobalStyle, DefaultTheme} from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
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
    outline: 2px solid ${({theme}) => theme.colors.accent};
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.2;
    background-color: ${props => props.theme.colors.backgroundSecondary};
    color: ${props => props.theme.colors.textPrimary};
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
    color: ${props => props.theme.colors.textPrimary};
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
    color: ${props => props.theme.colors.textSecondary};
  }

  span {
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
  }

  input, textarea {
    color: ${props => props.theme.colors.textPrimary};
  }
`;