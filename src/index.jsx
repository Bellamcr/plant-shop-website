import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./css/index.css";
import "./fonts/aller_bd-webfont.woff";
import "./fonts/aller_bd-webfont.woff2";
import "./fonts/caviardreams-webfont.woff";
import "./fonts/caviardreams-webfont.woff2";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <BrowserRouter>
  <App />
  // </BrowserRouter>
  // </React.StrictMode>
);
