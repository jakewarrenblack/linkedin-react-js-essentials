import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Commas act as placeholders
const [, , , fourth] = ["hedgehog", "dynamite", "jumper", "golf shoes"];
console.log(fourth);

ReactDOM.render(
  <App authorised={false} />,

  document.getElementById("root")
);
