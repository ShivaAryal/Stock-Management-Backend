const express = require('express');
const app = express();

const admin = require('./admin');
const owner = require('./owner');
const sales = require('./sales');
const stock = require('./stock');
const expense = require('./expense')

app.use('/admin',admin);
app.use('/owner',owner);
app.use('/sales',sales);
app.use('/stock',stock);
app.use('/expense',expense);

module.exports = app;