import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import $ from "jquery";
// import Popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { setAuthorizationHeader } from "./api/client";
import App from "./App";
import { AuthProvider } from "./components/auth/context";
import "./index.css";
import storage from "./utils/localStorage";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);
// console.log($, Popper);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider isInitallyLogged={!!accessToken}>
        <App />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
