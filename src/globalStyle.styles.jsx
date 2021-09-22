import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "Space Mono", sans-serif;
  font-size: 62.5%;
}

body {
  background-color: #141D2F;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 1.3rem;

  @media( min-width: 768px){
    padding-left: 97px;
    padding-right: 97px;
    font-size: 1.5rem;
  }
}
`;
