const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const router = require('./routes');
const environment = require('./utils/env');

const { PORT = 5000, NODE_ENV = 'development' } = environment;

const app = express();

NODE_ENV === 'development' && app.use(morgan('dev'));
NODE_ENV === 'production' && app.use(morgan('common'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api', router);
app.get('/', (req, res) => res.render('pages/index'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
