const { fetchPokemonById, getFlavourText } = require('../models/pokemon');

exports.getPokemonById = (req, res, next) => {
  const { pokeId } = req.params;
  Promise.all([getFlavourText(pokeId), fetchPokemonById(pokeId)])
    .then(([flavourText, pokemon]) => {
      const randomLink = `/api/pokemon/${Math.floor(Math.random() * 151) + 1}`;
      const variables = {
        name: pokemon.name,
        types: pokemon.types,
        randomLink,
        sprite: pokemon.sprite,
        flavourText
      };
      res.render('pokemon.ejs', variables);
    })
    .catch(err => {
      console.log(err);
    });
};
