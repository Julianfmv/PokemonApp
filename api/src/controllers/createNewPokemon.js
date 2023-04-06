const { Pokemon, Type } = require("../db");

const createNewPokemon = async (pokemon) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, image, types } =
      pokemon;
    if (!name || !hp || !attack || !defense || !image || !types)
      throw new Error("Need more info about the Pokemon!");

    const newPokemon = {
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
    };
    let createdPokemon = await Pokemon.create(newPokemon);
    createdPokemon.addTypes(types);
    return newPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = createNewPokemon;
