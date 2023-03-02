import React from "react";
import ReactDOM from "react-dom/client";
import "./translate/i18n.js";
import { Provider } from "react-redux";
import store from "./stores";
import "./styles/_main.scss";
import RouterPage from "./router";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouterPage />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
