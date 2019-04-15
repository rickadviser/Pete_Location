const router = require('express').Router();
const controller = require('../controllers');

router.get('/restaurants', controller.restaurants.getAll);
router.get('/attractions', controller.attractions.getAll);
router.get('/hotels', controller.hotels.get);
router.get('/distanceMatrix', controller.distanceMatrix.update);
router.get('/geocode', controller.distanceMatrix.geocode);
router.get('/initialize', controller.distanceMatrix.initialize);


module.exports = router;