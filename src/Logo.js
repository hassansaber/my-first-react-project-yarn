const Logo = () => {
  const appName = "Hassan's Pokedex";
  return (
    <header>
      <h1>welcome to {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokedex"
      />
    </header>
  );
};

export default Logo;
