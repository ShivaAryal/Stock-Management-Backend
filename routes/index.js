const express = require('express');
const app = express();

const admin = require('./admin');
//const user = require('./user');

app.use('/admin',admin);
//app.use('/user',user);

module.exports = app;