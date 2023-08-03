import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }

  html,
  body {
    overflow-x: hidden;
    max-width: 100vw;
    color: var(--black);
    background: #F5F6F8;
    font-family: 'Noto Sans', sans-serif;
    
  }
`;
