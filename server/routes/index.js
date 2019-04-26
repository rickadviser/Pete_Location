const router = require('express').Router();
const db = require('../database/mongoQueryDB');

router.get('/restaurants/:hotelName', (req, res) => {
  const { hotelName } = req.params;
  db.attractions.getAttractions(hotelName, 'restaurants').then((restaurantsInRange) => {
    res.json(restaurantsInRange);
  });
});
router.get('/attractions/:hotelName', (req, res) => {
  const { hotelName } = req.params;
  db.attractions.getAttractions(hotelName, 'attraction').then((restaurantsInRange) => {
    res.json(restaurantsInRange);
  });
});
router.get('/hotels/:hotelName', (req, res) => {
  db.hotels.getHotelByName(req.params.hotelName).then(hotel => res.json(hotel));
});
// router.get('/distanceMatrix', controller.distanceMatrix.update);
// router.get('/geocode', controller.distanceMatrix.geocode);
// router.get('/initialize', controller.distanceMatrix.initialize);

module.exports = router;
