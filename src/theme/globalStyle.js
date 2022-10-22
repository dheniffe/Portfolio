import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
  }

  body {
    margin: 0 auto;
    max-width: 1340px;
    color: #ffffff;
    background-color: #292727;
  }
`;
