import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
// import Landing from "./components/Landing";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        {/* <Route exact path="/" component={Landing}></Route> */}
        <Route exact path="/" component={App}></Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
