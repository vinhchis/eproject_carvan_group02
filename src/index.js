import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode >
);
