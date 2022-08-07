import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import "uno.css";
import "@unocss/reset/tailwind.css";
import ApiService from "./services/api/index.services";

ApiService.init(import.meta.env.VITE_API_URL);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
