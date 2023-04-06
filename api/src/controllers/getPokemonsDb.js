const { Pokemon, Type } = require("../db");

const getPokemonsDb = async () => {
  try {
    const data = await Pokemon.findAll({
      include: [
        {
          model: Type,
          attributes: ["name"],

          through: { attributes: [] },
        },
      ],
    });

    if (!data.length) {
      /* throw new Error("No pokemons found in DB") */
      return [];
    }

    let cleanPokemonsDB = data?.map((pokemon) => ({
      ...pokemon?.toJSON(),
      Types: pokemon.Types.map((type) => type.name),
    }));

    return cleanPokemonsDB;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getPokemonsDb;
