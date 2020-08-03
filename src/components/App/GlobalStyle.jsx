import { createGlobalStyle } from "styled-components";
import constants from "../constants";
const GlobalStyle = createGlobalStyle([
    `
body {
  align-items: initial;
  background-color: initial;
  display: block;
  font-family: ${constants.fontFamily};
  height: initial;
  justify-content: initial;
  margin: 0;
  padding-right: 0 !important;
  text-align: initial;
  width: initial;
}

a {
  color: ${constants.primaryLinkColor};
  text-decoration: none;
  transition: ${constants.normalTransition};

  &:hover {
    color: color(${constants.primaryLinkColor} lightness(-33%));
  }
}

li {
  list-style-type: none;
}

#root {
  background-color: #192023;
  background-image: -webkit-linear-gradient(to right, #1a2b3e, #141E30);
  background-image: linear-gradient(to right, #1a2b3e, #141E30);
  color: ${constants.primaryTextColor};
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  padding-top: 56px;
}

table {
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
}

td {
  font-size: 13px;
  text-align: left;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 5px;
  padding-bottom: 5px;
}

th {
  height: 38px;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  padding-left: 24px;
  padding-right: 24px;
}
`,
]);

export default GlobalStyle;
