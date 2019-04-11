const db = require('../database');

module.exports = {
  hotels: {
    get: id => new Promise((resolve, reject) => {
      const queryString = `SELECT * FROM hotels WHERE id = ${id}`;
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
  },
  restaurants: {
    getAll: () => new Promise((resolve, reject) => {
      db.query('SELECT * FROM restaurants', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    updateDistanceToHotel: (restaurantId, distance) => new Promise((resolve, reject) => {
      const queryString = `UPDATE restaurants SET DistanceFromHotel = ${distance} WHERE id = ${restaurantId}`;
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    updateLatLong: (restaurantId, Lat, Long) => new Promise((resolve, reject) => {
      const queryString = `UPDATE restaurants SET Latitude = ${Lat}, Longitude = ${Long} WHERE id = ${restaurantId}`;
      console.log(queryString);
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
  },
  attractions: {
    getAll: () => new Promise((resolve, reject) => {
      db.query('SELECT * FROM attractions', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
  },
};