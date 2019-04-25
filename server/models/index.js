const db = require('../database/mongoQueryDB');

module.exports = {
  hotels: {
    get: id => new Promise((resolve, reject) => {
      const queryString = `SELECT * FROM Hotels WHERE id = ${id}`;
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
      db.query('SELECT * FROM Restaurants', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    updateDistanceToHotel: (restaurantId, distance) => new Promise((resolve, reject) => {
      const queryString = `UPDATE Restaurants SET DistanceFromHotel = ${distance} WHERE id = ${restaurantId}`;
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    updateLatLong: (restaurantId, Lat, Long) => new Promise((resolve, reject) => {
      const queryString = `UPDATE Restaurants SET Latitude = ${Lat}, Longitude = ${Long} WHERE id = ${restaurantId}`;
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
      db.query('SELECT * FROM Attractions', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    updateDistanceToHotel: (attractionId, distance) => new Promise((resolve, reject) => {
      const queryString = `UPDATE Attractions SET DistanceFromHotel = ${distance} WHERE id = ${attractionId}`;
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
    updateLatLong: (attractionId, Lat, Long) => new Promise((resolve, reject) => {
      const queryString = `UPDATE Attractions SET Latitude = ${Lat}, Longitude = ${Long} WHERE id = ${attractionId}`;
      console.log(queryString);
      db.query(queryString, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }),
  },
};