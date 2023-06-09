const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./utils/database');
const User = require('./models/user');

const app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extrended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });