'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const auth = require('./routes/auth');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());

app.use('/auth', auth);

module.exports = app;
