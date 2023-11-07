import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Auth0Provider
    domain='dev-xnhb5uromijr0654.us.auth0.com'
    clientId="nmeS8Hj0eKXIsvShbhgWZvNdCyULVwHg"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>
);
