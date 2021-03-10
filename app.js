'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const loginRoute = require('./routes/login');
const signUpRoute = require('./routes/signup');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());

app.use('/login', loginRoute);
app.use('/signup', signUpRoute);

module.exports = app;
