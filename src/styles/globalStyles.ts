import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  body {  
    font-size: 1.125rem;
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;
