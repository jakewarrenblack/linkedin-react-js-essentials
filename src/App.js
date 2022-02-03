import React, { useState, useEffect } from "react";
import "./App.css";

// Using useEffect to fetch some data from a remote source

function App({ login }) {
  // data var and method to update the data,
  // start as null because there will be no data when the app loads
  const [data, setData] = useState(null);

  // login is passed as a prop from index.js
  useEffect(() => {
    // setData switches the state from 'null' to our JSON result
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (data) {
    // This div will display the data from the api
    return <div>{JSON.stringify(data)}</div>;
  }

  return <div>No user available</div>;
}

export default App;
