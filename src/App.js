import React, { Component } from "react";
import { Provider } from "react-redux";
import GlobalStyle from "./styled/GlobalStyle.js";
import "bulma/css/bulma.css";

import store from "./store";
import Main from "./components/Main";

export default () => (
  <Provider store={store}>
    <GlobalStyle />
    <Main />
  </Provider>
);
