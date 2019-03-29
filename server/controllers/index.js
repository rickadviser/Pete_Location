const models = require('../models');

module.exports = {
  restaurants: {
    getAll: (req, res) => {
      try {
        models.restaurants.getAll().then((results) => {
          res.json(results);
        });
      } catch (error) {
        res.status(500).json(error);
      }
    },
  },
  attractions: {
    getAll: (req, res) => {
      try {
        console.log('Get All Attractions')
        models.attractions.getAll().then((results) => {
          res.json(results);
        });
      } catch (error) {
        res.status(500).json(error);
      }
    },
  },
};