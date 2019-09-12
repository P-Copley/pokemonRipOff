// const flipCoin = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 1000) resolve('heads');
//       else reject('tails');
//     }, 1000);
//   });
// };

// Promise.all([flipCoin(), flipCoin()])
//   .then(results => {
//     console.log(results);
//   })
//   .catch(err => {
//     console.log(err, '<<< err');
//   });

const { fetchPokemonById } = require('./models/pokemon');

const ids = [1, 2, 3];

const pokePromises = ids.map(id => fetchPokemonById(id));

Promise.all(pokePromises)
  .then(pokemon => {
    console.log(pokemon);
  })
  .catch(console.log);
