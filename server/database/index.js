const mysql = require('mysql');

const CONFIG = require('../config');

const connection = mysql.createConnection({
  host: CONFIG.DB.HOST,
  user: CONFIG.DB.USER,
  password: CONFIG.DB.PASSWORD,
  database: CONFIG.DB.DATABASE,
});

connection.connect();

module.exports = connection;