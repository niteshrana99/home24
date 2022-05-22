import { css } from "@emotion/react";

export const mq = {
  "sm": 500
}

export const pagecss = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    /* font-size: 62.5%;   */
  }

  body {
    box-sizing: border-box;
  }

  .page {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 160px auto auto;
    grid-template-areas:
      "header header header"
      "sidebar content content"
      "footer footer footer";
    /* margin: 6px; */
  }

  .page > * {
    padding: 10px;
  }

  .header {
    grid-area: header;
    background-color: lightblue;
  }

  .header input {
    float: right;
  }

  .sidebar {
    grid-area: sidebar;
    background-color: #80808012;
    width: 100%;
    padding:0;
    height:fit-content ;
  }

  .sidebar ul {
    list-style-type: none;
    margin: 0;
  }

  .sidebar ul li {
    padding: 8px 0; 
  }

  .footer {
    grid-area: footer;
    background-color: lightblue;
    text-align: center;
  }
`;
