import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";

import store from "./store";
import Home from "./components/Home";

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
