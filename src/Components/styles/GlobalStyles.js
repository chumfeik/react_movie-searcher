import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #eee;
  }
  *,
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p {
    color: #333;
  }
  a {
    color: #02f;
    :hover {color: #27f;}
    :not(:hover) {text-decoration: none;}
  }
`;

export { GlobalStyle };
