import React, { useState, useReducer } from "react";
import "./App.css";

// considering how we might manage a checkBox's state using React

function App() {
  // a reducer function = receive the current state, and return a new state
  // useReducer receives two arguments: the reducer function, and the initial state
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      {/* We now use our reducer function to update the state of the checkbox */}
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;
