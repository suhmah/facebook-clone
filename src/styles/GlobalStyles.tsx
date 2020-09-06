import { createGlobalStyle } from "styled-components";
import color from "./index";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;    
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    background-color: ${color.dark.primary}
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  
`;
