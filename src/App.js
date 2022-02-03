import "./App.css";

// A component is a function that returns UI
// Wherever the component is, that's where you add props
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  );
}

const dishes = ["Bananas", "Coddle", "Stew"];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
      <ul style={{ listStyle: "none" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <h3>Copyright {props.year}</h3>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="John" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
