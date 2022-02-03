import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  // second argument = dependency array
  // if nothing passed, props in the state will always have their initial values

  // but can also use it to keep track of values,
  // eg here we pass emotion so useEffect will update if state changes

  // this will watch emotion change
  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion]);

  // this will watch secondary change
  useEffect(() => {
    console.log(`It's also ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>
        Current mood is {emotion} and {secondary}
      </h1>
      {/* Plug a new value into the 'emotion' state */}
      <button onClick={() => setEmotion("happy")}>happy</button>
      <button onClick={() => setEmotion("sad")}>sad</button>
      <button onClick={() => setEmotion("frustrated")}>frustrated</button>
      <button onClick={() => setSecondary("crabby")}>crabby</button>
    </>
  );
}

export default App;
