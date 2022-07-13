import React from "react";
import logo from "../logo.svg";

function NavBar(props) {
  let pokeapiImagen =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  let pokeballImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png";

  return (
    <nav>
      <img className="pokeball" src={logo} alt="logo" />
      <img className="pokeball" src={pokeballImage} alt="logo" />
      <img className="navbar-image" src={pokeapiImagen} alt="pokeapi-logo" />
      <img className="pokeball" src={pokeballImage} alt="pokeball" />
      <img className="pokeball" src={logo} alt="logo" />
    </nav>
  );
}

export default NavBar;
