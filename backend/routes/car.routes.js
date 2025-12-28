const express = require('express');
const router = express.Router();
const carController = require('../controllers/car.controller');
//const bookingController = require('../controllers/booking.controller');

// Route to get available cars for a given date range and city
router.get('/available', carController.getAvailableCars);

router.post('/', carController.createCar);
router.get('/', carController.getAllCars);
router.get('/active', carController.getActiveCars);

module.exports = router;