// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
