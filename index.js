const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const router = require('./routes');
const environment = require('./utils/env');

const { PORT = 5000 } = environment;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
