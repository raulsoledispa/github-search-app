import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  font-size: 62.5%;
}

body {
  background-color: var(--primary-color);
  padding-left: 24px;
  padding-right: 24px;
}
`;
