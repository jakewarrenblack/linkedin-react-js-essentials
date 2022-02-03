import "./App.css";

function SecretComponent() {
  return <h1>Top secret information here</h1>;
}

function NormalComponent() {
  return <h1>Anybody can see this Component</h1>;
}

// object destructuring, authorised is a key of 'props, but like this
// we can just use the key
function App({ authorised }) {
  return <>{authorised ? <SecretComponent /> : <NormalComponent />}</>;
}

export default App;
