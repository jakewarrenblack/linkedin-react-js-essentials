import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  /* Name of tag, properties to apply, child */
  // React.createElement(
  //   "h1",
  //   {
  //     style: { color: "blue" },
  //   },
  //   "Hello world"
  // ),

  // ** Can have a tag as a child, but this is really repetitive... **
  // React.createElement(
  //   "ul",
  //   null,
  //   React.createElement("li", null, "Monday"),
  //   React.createElement("li", null, "Tuesday"),
  //   React.createElement("li", null, "Wednesday"),
  //   React.createElement("li", null, "Thursday")
  // ),

  // Better like this, JSX syntax
  // Remember this doesn't run in the browser natively, Babel takes care of it,
  // converts this to use the above 'create element' calls
  // <ul>
  //   <li>Monday</li>
  //   <li>Tuesday</li>
  //   <li>Wednesday</li>
  //   <li>Thursday</li>
  // </ul>,

  <App />,

  document.getElementById("root")
);
