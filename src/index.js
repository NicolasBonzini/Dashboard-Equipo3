/* istanbul ignore file */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//React-router-dom
import { BrowserRouter } from "react-router-dom";
//Context
import { ToggleProvider } from "./context/ToggleContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ToggleProvider>
          <App />
        </ToggleProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
