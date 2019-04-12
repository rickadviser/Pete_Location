const models = require('../models');
const googleMaps = require('../googlemaps');

module.exports = {
  hotels: {
    get: (req, res) => {
      models.hotels.get(100).then((results) => {
        res.json(results);
      }).catch((error) => {
        res.status(500).json(error);
      });
    },
  },
  restaurants: {
    getAll: (req, res) => {
      models.restaurants.getAll().then((results) => {
        res.json(results);
      }).catch((error) => {
        res.status(500).json(error);
      });
    },
  },
  attractions: {
    getAll: (req, res) => {
      models.attractions.getAll().then((results) => {
        res.json(results);
      }).catch((error) => {
        res.status(500).json(error);
      });
    },
  },
  distanceMatrix: {
    update: (req, res) => {
      models.restaurants.getAll().then((results) => {
        results.forEach((restaurant) => {
          googleMaps.updateDistanceMatrix('origins', restaurant.Addr1 + ', ' + restaurant.City + ', ' + restaurant.State).then((distance) => {
            console.log(restaurant.Name, distance);
            models.restaurants.updateDistanceToHotel(restaurant.id, distance);
          });
        });
      });
      models.attractions.getAll().then((results) => {
        results.forEach((attraction) => {
          googleMaps.updateDistanceMatrix('origins', attraction.Addr1 + ', ' + attraction.City + ', ' + attraction.State).then((distance) => {
            console.log(attraction.Name, distance);
            models.attractions.updateDistanceToHotel(attraction.id, distance);
          });
        });
      });
      res.send('Success');
    },
    geocode: (req, res) => {
      models.restaurants.getAll().then((results) => {
        results.forEach((restaurant) => {
          console.log(restaurant.Addr1 + restaurant.City);
          googleMaps.geoEncode(restaurant.Addr1 + ', ' + restaurant.City + ', ' + restaurant.State).then((location) => {
            models.restaurants.updateLatLong(restaurant.id, location.lat, location.lng);
          });
        });
      });
      models.attractions.getAll().then((results) => {
        results.forEach((attraction) => {
          console.log(attraction.Addr1 + attraction.City);
          googleMaps.geoEncode(attraction.Addr1 + ', ' + attraction.City + ', ' + attraction.State).then((location) => {
            models.attractions.updateLatLong(attraction.id, location.lat, location.lng);
          });
        });
      });
      res.send('Success');
    },
  },
};