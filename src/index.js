import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// We use BrowserRouter because we're using the dom/website
// React also has tools for native apps
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  // Wrap our app in the Router,
  // giving the app access to all router properties,
  // eg location, history
  <Router>
    <App login="jakewarrenblack" />,
  </Router>,

  document.getElementById("root")
);
