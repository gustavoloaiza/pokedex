export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//limit cuantos - offset desde cual
export const getPokemons = async (limit = 5, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//info de cada uno los valores
export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//for evolution
export const getSpecies = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const evolutionChain = async (url) => {
  try {
    //let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//ver si puedo solucionar de no llamar a todos
export const searchPokemonByType = async (type, limit = 5, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/type/${type}`;
    const response = await fetch(url);
    const data = await response.json();
    var newData = data.pokemon.slice(offset, offset + limit);
    return { length: data.pokemon.length, data: newData };
  } catch (err) {}
};
