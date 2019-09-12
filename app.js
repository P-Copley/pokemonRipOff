const express = require('express');
const app = express();
const apiRouter = require('./routes/api-router');

app.set('view-engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res, next) => {
  const randomLink = `/api/pokemon/${Math.floor(Math.random() * 151) + 1}`;
  res.render('home.ejs', { name: 'paul', randomLink });
});

app.use('/api', apiRouter);

module.exports = app;
