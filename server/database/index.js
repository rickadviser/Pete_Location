const mysql = require('mysql');
const CONFIG = require('../config');

const connection = mysql.createConnection({
  host: CONFIG.DB.HOST,
  user: CONFIG.DB.USER,
  password: CONFIG.DB.PASSWORD,
  database: CONFIG.DB.DATABASE,
});

//connection.connect();

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the MySQL server');
  }
});


module.exports = connection;