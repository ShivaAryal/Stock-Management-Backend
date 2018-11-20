const express = require('express');
const app = express();

const admin = require('./admin');
const owner = require('./owner');
const sales = require('./sales')

app.use('/admin',admin);
app.use('/owner',owner);
app.use('/sales',sales);

module.exports = app;