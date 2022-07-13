import React, { useState, useEffect } from "react";
import styles from "./estilos/styles.css";
import NavBar from "./components/NavBar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import FilterType from "./components/FilterType";
import Pokeball from "./components/Pokeball";
import {
  getPokemonData,
  getPokemons,
  searchPokemon,
  searchPokemonByType,
} from "./api";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [howManyShow, setHowManyShow] = useState(25);
  const noEncontro =
    "https://www.metroecuador.com.ec/resizer/rNcaCuplJrCPT3kUBbe1o5nBKoM=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ZRUV2TYWCZCLDBYOZVBSKJHTNY.jpg";

  const handleTypeSelection = (e) => {
    setSelectedType(e.target.value);
  };

  // trae de api pokemones con limit y affset hasta el 10
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      var selectType = selectedType.toLowerCase();
      setNotFound(false);
      if (selectedType === "all") {
        const data = await getPokemons(howManyShow, howManyShow * page);
        //promise para obtener toda la info de pokemon, por que primera solo retorna nombre y url
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        });
        const results = await Promise.all(promises);
        setPokemones(results);
        setLoading(false);
        setTotal(Math.ceil(data.count / howManyShow));
      } else {
        const { length, data } = await searchPokemonByType(
          selectedType,
          howManyShow,
          howManyShow * page
        );
        const promises = data.map(async (pokemon) => {
          return await getPokemonData(pokemon.pokemon.url);
        });
        const results = await Promise.all(promises);
        setPokemones(results);
        setLoading(false);
        setTotal(Math.ceil(length / howManyShow));
        //console.log(length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //cambio en app pokemones
  useEffect(() => {
    fetchPokemons();
  }, [page, selectedType, howManyShow]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);

    const result = await searchPokemon(pokemon.toLowerCase());
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemones([result]);
      console.log(result);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
  };

  const handlehowManyShow = (e) => {
    let number = parseInt(e.target.value);
    if (!isNaN(number) && number >= 1) {
      setHowManyShow(number);
    } else {
      setHowManyShow(25);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="App">
        <div className="filter-container">
          <Searchbar onSearch={onSearch} />
          <input
            className="howmany-container"
            value={howManyShow}
            onChange={handlehowManyShow}
          />
          <FilterType setFilterType={handleTypeSelection} />
        </div>
        {notFound ? (
          <div>
            <div className="no-encontro-texto">no se encontro el pokemon</div>
            <Pokeball />
          </div>
        ) : (
          <Pokedex
            loading={loading}
            pokemones={pokemones}
            page={page}
            setPage={setPage}
            total={total}
          />
        )}
      </div>
    </div>
  );
}

export default App;
//<img src={noEncontro} className="no-encontro-image" />
