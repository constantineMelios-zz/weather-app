import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @import url('https://fonts.googleapis.com/css2?family=Andika+New+Basic&family=Langar&display=swap');

  :root {
    --display-font: 'Langar', cursive;
    --normal-font: 'Andika New Basic', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
    font-family: var(----normal-font);
  }

  .App {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyle;
