const express = require('express');
const database = require('./config/database');
require('dotenv').config();

const app = express();

app.use(express.json());
app.database = database;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

module.exports = app;