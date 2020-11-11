import React from "react";
import ReactDOM from "react-dom";
import WebFont from 'webfontloader';
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App";

const backStyle = {
  backgroundColor: '#CEC7B1',
  height: '80vh'
}

ReactDOM.render(
  <React.StrictMode>
    <App style={ backStyle } />
  </React.StrictMode>,
  document.getElementById("root")
);
