const pokemonRouter = require('express').Router();
const { getPokemonById } = require('../controllers/pokemon');

pokemonRouter.get('/:pokeId', getPokemonById);

module.exports = pokemonRouter;
