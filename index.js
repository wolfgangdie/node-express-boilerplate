const express = require('express');
const path = require('path');

const ENV = require('./utils/env');

const { PORT = 5000 } = ENV;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
