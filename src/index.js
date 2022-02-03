import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function AppTwo() {
  return <h1>This is the second app</h1>;
}

ReactDOM.render(
  // React.Fragment helps us get around using an unnecessary <div> tag,
  // just for wrapping our two apps. Like in Vue, we need one root component.
  // The fragment acts like a wrapper without actually adding anything to the DOM
  // Our </> is just shorthand for 'React.Fragment'
  <>
    <App />,
    <AppTwo />
  </>,
  document.getElementById("root")
);
