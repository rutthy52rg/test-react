import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { setAuthorizationHeader } from "./api/client";
import App from "./App";
import { AuthProvider } from "./components/auth/ContextAuth";
import "./index.css";
import storage from "./utils/localStorage";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);
console.log("initialLoged", !!accessToken);

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
