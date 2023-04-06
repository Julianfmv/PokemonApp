const { Router } = require("express");
const getAllPokemons = require("../controllers/getAllPokemons");
const getPokemonByName = require("../controllers/getPokemonByName");
const getPokemonById = require("../controllers/getPokemonById");
const createNewPokemon = require("../controllers/createNewPokemon");

const pokemonRouter = Router();

pokemonRouter.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const foundPokemon = await getPokemonByName(name);
      return res.json(foundPokemon);
    } else {
      const allPokemons = await getAllPokemons();
      if (allPokemons.error) throw new Error(allPokemons.error);
      return res.json(allPokemons);
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

pokemonRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const foundPokemon = await getPokemonById(id);
    if (foundPokemon.error) throw new Error(foundPokemon.error);
    return res.json(foundPokemon);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

pokemonRouter.post("/", async (req, res) => {
  try {
    const newPokemon = await createNewPokemon(req.body);
    if (newPokemon.error) throw new Error(newPokemon.error);
    return res.status(201).json(newPokemon);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = pokemonRouter;
