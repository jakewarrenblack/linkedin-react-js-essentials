import React, { useState } from "react";
import "./App.css";

function App() {
  // We can use array destructuring to pop the first item out of this array
  // and give it a name

  // useState has 2 values in it, so we use destructuring to get at them,
  // instead of having to use indexes

  // first is state variable, second is function for updating the state
  // this is the naming convention:
  const [emotion, setEmotion] = useState("happy");
  // useState(initial value here, can be anything; boolean, number, string)

  return (
    <>
      <h1>Current mood is {emotion}</h1>
      {/* Plug a new value into the 'emotion' state */}
      <button onClick={() => setEmotion("happy")}>happy</button>
      <button onClick={() => setEmotion("sad")}>sad</button>
      <button onClick={() => setEmotion("frustrated")}>frustrated</button>
    </>
  );
}

export default App;
