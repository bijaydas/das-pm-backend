'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const auth = require('./routes/auth');
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());

app.use('/auth', auth);

module.exports = app;
