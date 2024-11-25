import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap your App component with BrowserRouter here
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
