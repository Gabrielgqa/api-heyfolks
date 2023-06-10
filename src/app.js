const express = require('express');
const path = require('path');
const routes = require('./routes/index');

require('dotenv').config();

const app = express();

app.set('view engine','ejs');
app.set('views', './src/views');
app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'node_modules/bulma/css')));

app.use(express.json());
app.use(routes);

module.exports = app;