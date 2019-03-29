const db = require('../database');

module.exports = {
  restaurants: {
    getAll: () => new Promise((resolve, reject) => {
      db.query('select * from restaurants', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
  },
  attractions: {
    getAll: () => new Promise((resolve, reject) => {
      db.query('select * from attractions', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
  },
};