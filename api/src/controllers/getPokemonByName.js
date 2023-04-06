const { get } = require('axios');
const { Op } = require('sequelize');
const { Pokemon, Type } = require('../db');

// ---------------------- Get from Api ----------------------------------------

// eslint-disable-next-line consistent-return
const getFromApi = async (pokeName) => {
  try {
    const { data } = await get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

    if (data) {
      const foundPokemon = {
        id: data.id,
        name: data.name,
        Types: data.types.map((type) => `${type.type.name} `),
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        image: data.sprites.front_default,
      };
      return foundPokemon;
    }
  } catch (error) {
    throw new Error('Something went wrong with the API!');
  }
};
// ---------------------- Get from DB ----------------------------------------
const getFromDb = async (pokeName) => {
  try {
    const foundPokemon = await Pokemon.findOne({
      where: { name: { [Op.iLike]: `%${pokeName}` } },
      include: [Type],
    });
    if (!foundPokemon) throw new Error(`No ${pokeName} was found in the DB!`);
    return foundPokemon;
  } catch (error) {
    return error.message;
  }
};
// ---------------------- Get from both ----------------------------------------
const getPokemonByName = async (pokeName) => {
  try {
    const fromApi = await getFromApi(pokeName);
    const fromDb = await getFromDb(pokeName);

    const foundPokemons = [...fromApi, ...fromDb];

    return foundPokemons;
  } catch (error) {
    return error.message;
  }
};

module.exports = getPokemonByName;
