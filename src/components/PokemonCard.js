import React, { useState, useRef } from "react";
import { Overlay } from "react-bootstrap";
import Info from "./Info";

function PokemonCard(props) {
  const { pokemon } = props;
  //console.log(pokemon);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  function tool() {
    console.log(pokemon);

    setShow(!show);
  }

  const pokemonType = pokemon.types.map((type, idx) => {
    return (
      <div key={idx} id="type-box" className={type.type.name}>
        {type.type.name}
      </div>
    );
  });

  return (
    <div className="pokemon-card" ref={target} onClick={() => tool()}>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-img"
      />
      <div className="pokemon-card-body">
        <div className="id-pokemoncard"> # {pokemon.id}</div>
        <h3 className="nombre-pokemoncard">{pokemon.name}</h3>
        <div className="tipo-pokemoncard">{pokemonType}</div>
      </div>

      <Overlay target={target.current} show={show} placement="auto">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "rgba(100, 100, 100, 0.95)",
              padding: "2px 2px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            <Info pokemon={pokemon} />
          </div>
        )}
      </Overlay>
    </div>
  );
}

export default PokemonCard;
