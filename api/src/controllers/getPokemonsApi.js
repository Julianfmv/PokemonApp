const { get } = require('axios');
// const { Pokemon, Type } = require('../db');

const getPokemonsApi = async () => {
  const pokemons = [];
  let endpoint = 'https://pokeapi.co/api/v2/pokemon';

  try {
    while (pokemons.length < 80) {
      const { data } = await get(endpoint);
      pokemons.push(...data.results);

      endpoint = data.next;
    }

    const promises = await Promise.all(
      pokemons.map(async (pokemon) => {
        const response = await get(pokemon.url);
        return response.data;
      }),
    );
    const apiPokemons = promises.map((pokemonData) => ({
      id: pokemonData.id,
      name: pokemonData.name,
      hp: pokemonData.stats[0].base_stat,
      attack: pokemonData.stats[1].base_stat,
      defense: pokemonData.stats[2].base_stat,
      speed: pokemonData.stats[5].base_stat,
      height: pokemonData.height,
      weight: pokemonData.weight,
      image: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default,
      Types: pokemonData.types.map((type) => `${type.type.name} `),
    }));
    return apiPokemons;
  } catch (error) {
    // en caso de que la req a la API falle por algun motivo, tira el error
    throw new Error(`Error fetching Pokemon data: ${error.message}`);
  }
};

module.exports = getPokemonsApi;
