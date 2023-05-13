import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
