require('dotenv').config();

const config = {
  development: {
    dialect: process.env.DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    quoteIdentifiers: false,
  },
  test: {
    dialect: process.env.DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    quoteIdentifiers: false,
  },
  production: {
    dialect: process.env.DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    quoteIdentifiers: false,
  },
};

module.exports = config;
