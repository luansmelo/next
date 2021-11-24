import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font-family: circular-spotify-ui, Helvetica Neue, Helvetica, Arial, sans-serif;
    a {
      text-decoration: unset;
    }
  }

    html, body {
      margin:0;
      padding:0;
      height: 100vh;
    }

    ::-webkit-scrollbar-track {
      border-radius: 2px;
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar {
      width: 9px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background-color: #ffb700;

    :hover  {
      background-color: #e0a202;
    }
  }


`;

export default GlobalStyle;
