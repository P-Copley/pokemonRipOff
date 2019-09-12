const axios = require('axios');

exports.fetchPokemonById = id => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(({ data }) => {
      const pokeObj = {
        nationaldexNum: data.id,
        name: data.name,
        weight: data.weight,
        height: data.height,
        types: data.types.map(typeObj => {
          return typeObj.type.name;
        }),
        sprite: data.sprites.front_default
      };
      return pokeObj;
    });
};

exports.getFlavourText = id => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then(({ data }) => {
      const englishEntry = data.flavor_text_entries.find(
        entry => entry.language.name === 'en'
      );
      return englishEntry.flavor_text;
    });
};
