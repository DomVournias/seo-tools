import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    font-family: Roboto, Arial;
    text-size-adjust: none;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    
  }
  body.disable-scroll {
    overflow: hidden;
}
  body.gray-background {
    background-color: #e5e5e5;
  }
  a:hover {
      opacity: .9;
      cursor: pointer;
    }
  input, a {
    all: unset;
  }
  input {
  color-scheme: dark;
  
  
}
   button, h1, h2, h3, h4, h5, h6, p {
    all: unset;
    
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    color: inherit;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  
* {
  box-sizing: border-box;
  
}
pre, code {
  overflow: scroll;
}
*:focus {
  outline: none !important;
}
svg {
  box-sizing: content-box;
}

ul {
margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
`;
