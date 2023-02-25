import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./translate/i18n.js";
import { Provider } from "react-redux";
import store from "./stores";
import "./styles/_main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
