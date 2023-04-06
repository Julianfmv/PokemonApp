const getPokemonsApi = require('./getPokemonsApi');
const getPokemonsDb = require('./getPokemonsDb');

const getAllPokemons = async () => {
  try {
    const apiPokemons = await getPokemonsApi();

    const dbPokemons = await getPokemonsDb();

    const allPokemons = [...dbPokemons, ...apiPokemons];

    return allPokemons;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getAllPokemons;
