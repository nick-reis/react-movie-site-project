import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-movie-site-project">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
