import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="wolontariatapp.eu.auth0.com"
      clientId="A82ivn5yifHMJvpkX1EsLI655IiMcBdK"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
