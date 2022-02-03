import "./App.css";

function SecretComponent() {
  return <h1>Top secret information here</h1>;
}

function NormalComponent() {
  return <h1>Anybody can see this Component</h1>;
}

function App(props) {
  return <>{props.authorised ? <SecretComponent /> : <NormalComponent />}</>;
}

export default App;
