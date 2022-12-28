import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  * {
    align-items: center;
    font-family: "Pretendard-Regular";

    padding: 5px;
    margin: 5px;
    border: 1px solid grey;
  }

  html {
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
