const googleMaps = require('@google/maps');
const CONFIG = require('../config');

module.exports = {
  updateDistanceMatrix: (origins, destinations) => {
    // console.log('origins', origins);
    // console.log('destinations', destinations);
    const mapsClient = googleMaps.createClient({
      key: CONFIG.GOOGLEMAPS.KEY,
      Promise,
    });
    return new Promise((resolve, reject) => {
      mapsClient.distanceMatrix({
        origins: '333 Wonderview Ave, Estes Park, CO 80517-9665',
        destinations,
        mode: 'driving',
      }).asPromise().then((res) => {
        res.json.rows[0].elements.forEach((destination) => {
          const miles = destination.distance.value * 0.0006213712;
          resolve(miles);
        });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  geoEncode: (address) => {
    const mapsClient = googleMaps.createClient({
      key: CONFIG.GOOGLEMAPS.KEY,
      Promise: Promise,
    });
    return new Promise((resolve, reject) => {
      mapsClient.geocode({
        address,
      }).asPromise().then((res) => {
        resolve(res.json.results[0].geometry.location);
      }).catch((err) => {
        console.log(err);
      });
    });
  },
};