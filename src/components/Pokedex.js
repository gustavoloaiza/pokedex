import React from "react";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import Pokeball from "./Pokeball";

function Pokedex(props) {
  const { pokemones, page, setPage, total, loading } = props;

  function lastPage(num) {
    const nextPage = Math.max(page - num, 0);
    setPage(nextPage);
  }
  function nextPage(num) {
    const nextPage = Math.min(page + num, total - 1);
    setPage(nextPage);
  }

  return (
    <div>
      <div className="header">
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div>
          <div className="no-encontro-texto">Caragando pokemosnes.....</div>
          <Pokeball />
        </div>
      ) : (
        <div className="pokedex-formato">
          {pokemones.map((pokemon, idx) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.className}
              ></PokemonCard>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Pokedex;
