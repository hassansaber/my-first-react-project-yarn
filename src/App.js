<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
=======
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
>>>>>>> e74bd509a65cd35f3edaf51901f2afaf2ed3e13c

const App = () => {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
    <div style={{ textAlign: "center" }}>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
>>>>>>> e74bd509a65cd35f3edaf51901f2afaf2ed3e13c
    </div>
  );
};

export default App;
