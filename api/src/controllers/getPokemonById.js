const { get } = require('axios');
const { Pokemon, Type } = require('../db');

const getPokemonById = async (id) => {
  try {
    if (id < 1009) {
      const { data } = await get(`https://pokeapi.co/api/v2/pokemon/${id}`);

      const foundPokemonApi = {
        id: data.id,
        name: data.name,
        Types: data.types.map((type) => `${type.type.name} `),
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        image: data.sprites.versions['generation-v']['black-white'].animated.front_shiny,
      };
      if (foundPokemonApi) return foundPokemonApi;

      throw new Error(`No pokemon found with id: ${id}`);
    } else {
      const foundPokemonDb = await Pokemon.findByPk(id, {
        include: [
          {
            model: Type,
            attributes: ['name'],
            through: { attributes: [] },
          },
        ],
      });

      if (foundPokemonDb) {
        const actualPokemon = {
          ...foundPokemonDb.toJSON(),
          Types: foundPokemonDb.types.map((type) => type.name),
        };
        // return actualPokemon;
      }
    }
    throw new Error(`No pokemon found with id: ${id}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getPokemonById;
