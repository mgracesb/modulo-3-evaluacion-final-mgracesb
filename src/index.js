import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "./components/App";
import Wrong from "./components/app-components/Wrong";
// import Animation from "./components/app-components/Animation";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/" component={App}></Route>
      <Route path="*" component={Wrong}></Route>
      {/* <Route path="/animation" component={Animation}></Route> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
