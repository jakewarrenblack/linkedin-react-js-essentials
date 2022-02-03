import React, { useState, useEffect } from "react";
import "./App.css";

// Handling different responses

function App({ login }) {
  const [data, setData] = useState(null);

  // Handling loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // cancel immediately if no login
    if (!login) return;
    // if there is a login, start loading
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      // once the data has been set, we're no longer loading
      .then(() => setLoading(false))
      .catch(setError);
    // any time the value of login changes, we will call this useEffect,
    // that's the result of passing 'login' into useEffect's dependency array
  }, [login]);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (!data) return null;

  if (data) {
    console.log(data);
    return (
      <div>
        <h1>{data.login}</h1>
        <h2>{data.location}</h2>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }

  return <div>No user available</div>;
}

export default App;
