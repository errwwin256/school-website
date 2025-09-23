// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // ← IMPORTANT: Tailwind + custom CSS must be imported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/school-website">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
