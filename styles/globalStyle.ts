import { mediaQueries, theme } from "./theme";
import { createGlobalStyle } from "styled-components";
import Mark from './../public/code.svg';

const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
  }
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    overflow-x: hidden;
    font-size: 62.5% !important;
    scroll-behavior: smooth;
    height: -webkit-fill-available;
  }

  body {
    font-size: 2rem;
    background: ${theme.colors.bg};
    // background-image: url(${Mark.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: 'Montserrat', sans-serif;
    color: ${theme.colors.white};
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

 #nprogress {
    .bar {
      background: ${theme.colors.second};
    }

    .peg {
      box-shadow: 0 0 10px ${theme.colors.main},
      0 0 5px ${theme.colors.main};
    }

    .spinner-icon {
      border-top-color:${theme.colors.main};
      border-bottom-color: ${theme.colors.main};
    }
  }


  #nprogress {
      pointer-events: none
  }

  #nprogress .bar {
      background: ${theme.colors.second};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px
  }

  #nprogress .peg {
      display: block;
      position: absolute;
      right: 0;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${theme.colors.second},0 0 5px ${theme.colors.second};
      opacity: 1;
      transform: rotate(3deg) translateY(-4px)
  }

  #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px
  }

  #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border-color: ${theme.colors.second} transparent transparent ${theme.colors.second};
      border-style: solid;
      border-width: 2px;
      border-radius: 50%;
      -webkit-animation: nprogress-spinner .4s linear infinite;
      animation: nprogress-spinner .4s linear infinite
  }

  .nprogress-custom-parent {
      overflow: hidden;
      position: relative
  }

  .nprogress-custom-parent #nprogress .bar,
  .nprogress-custom-parent #nprogress .spinner {
      position: absolute
  }

  @-webkit-keyframes nprogress-spinner {
      0% {
          -webkit-transform: rotate(0deg)
      }

      to {
          -webkit-transform: rotate(1turn)
      }
  }

  @keyframes nprogress-spinner {
      0% {
          transform: rotate(0deg)
      }

      to {
          transform: rotate(1turn)
      }
  }

  :root {
    --container-width: 100%;

    ${mediaQueries.greaterThan('xl')`
      --container-width: 131.04rem;
    `}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    letter-spacing: 0.54px;
    color: ${theme.colors.main};
  }

  h1 {
    font-size: 4rem;
  }
`;

export default GlobalStyle;