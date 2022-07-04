const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});


app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);
