import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/" component={App}></Route>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
