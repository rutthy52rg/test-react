import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { setAuthorizationHeader } from "./api/client";
import App from "./App";
import "./index.css";
import Storage from "./utils/Storage";

const accessToken = Storage.getStorage("auth");
setAuthorizationHeader(accessToken);
console.log("initialLoged", !!accessToken);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App initialLoged={!!accessToken} />
    </Router>
  </React.StrictMode>
);
