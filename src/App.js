import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
};

export default App;
