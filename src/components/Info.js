import React, { useEffect, useState } from "react";
import { getSpecies, evolutionChain, searchPokemon } from "../api";

function Info(props) {
  const { pokemon } = props;
  const [evoluChain, setEvoluChain] = useState([]);

  const searchEvolution = (obj) => {
    Object.values(obj).forEach(async (val) => {
      if (val != null && typeof val === "object") {
        if ("species" in val && !evoluChain.includes(val.species.name)) {
          const result = await searchPokemon(val.species.name);
          setEvoluChain((evoluChain) => [...evoluChain, result]);
        }
        if ("evolves_to" in val) {
          searchEvolution(val.evolves_to);
        }
      }
    });
  };

  const fetchPokemons = async () => {
    try {
      const results = await getSpecies(pokemon.name);
      //console.log(results);
      const evolution = await evolutionChain(results.evolution_chain.url);
      //console.log(evolution);
      searchEvolution(evolution);
      //console.log(evoluChain);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  console.log(evoluChain);
  return (
    <div className="info">
      <div>
        {evoluChain.map((chain, idx) => {
          return (
            <div className="info-header">
              <img src={chain.sprites.front_default} alt={chain.name} />
              <div>{chain.name}</div>
            </div>
          );
        })}
      </div>

      <div>
        {pokemon.stats.map((stat, idx) => {
          return (
            <div>
              {stat.stat.name}:{stat.base_stat}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Info;
