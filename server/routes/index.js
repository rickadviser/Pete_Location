const router = require('express').Router();
// const controller = require('../controllers');
// const db = require('../database/mongoQueryDB');
const db = require('../database/postGresQuery.js');

router.get('/restaurants/:hotelName', (req, res) => {
  // controller.restaurants.getAll
  db.attractions.getAttractions(req.params.hotelName, 'restaurant').then((restaurantsInRange) => {
    res.json(restaurantsInRange);
  });
});
router.get('/attractions/:hotelName', (req, res) => {
  // controller.attractions.getAll
  db.attractions
    .getAttractions(req.params.hotelName, 'attraction')
    .then(restaurantsInRange => res.json(restaurantsInRange));
});
router.get('/hotels/:hotelName', (req, res) => {
  // controller.hotels.get
  db.hotels.getHotelByName(req.params.hotelName).then(hotel => res.json(hotel));
});
// router.get('/distanceMatrix', controller.distanceMatrix.update);
// router.get('/geocode', controller.distanceMatrix.geocode);
// router.get('/initialize', controller.distanceMatrix.initialize);

module.exports = router;
