import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import App from "./App";

// Store -> Globalized State
// Action -> Increment
// Reducer
// Dispatch

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
