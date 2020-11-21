import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./store";
import App from "./App";

import "./index.css";

const app = (
  <StateProvider>
    <App />
  </StateProvider>
);

ReactDOM.render(app, document.getElementById("root"));
