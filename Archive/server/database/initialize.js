const execsql = require('execsql');
const CONFIG = require('../config');

const initializeDB = () => {
  const dbConfig = {
    host: CONFIG.DB.HOST,
    user: CONFIG.DB.USER,
    password: CONFIG.DB.PASSWORD,
  };
  const sql = CONFIG.DB.NAME;
  const sqlFile = __dirname + '/locations_setup.sql';

  execsql.config(dbConfig)
    .exec(sql)
    .execFile(sqlFile, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(err);
      }
    }).end();
};

module.exports = initializeDB;