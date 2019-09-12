const apiRouter = require('express').Router();
const pokemonRouter = require('./pokemon-router');

apiRouter.use('/pokemon', pokemonRouter);

module.exports = apiRouter;
