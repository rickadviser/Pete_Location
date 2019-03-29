const router = require('express').Router();
const controller = require('../controllers');

router.get('/restaurants', controller.restaurants.getAll);
router.get('/attractions', controller.attractions.getAll);

module.exports = router;