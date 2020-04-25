import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import App from "./components/App";
import WrongURL from "./components/app-components/WrongURL";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="*" component={WrongURL}></Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
