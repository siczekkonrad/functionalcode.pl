import { mediaQueries, theme } from "./theme";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    background: ${theme.colors.dark};
  }

  #nprogress {
    .bar {
        
    }

    .peg {

    }

    .spinner-icon {

    }
  }
`;

export default GlobalStyle;