const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouter = require("./pokemonRoutes");
const typesRouter = require("./typeRoutes");

const router = Router();

router.use("/pokemons", pokemonRouter);
router.use("/types", typesRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
