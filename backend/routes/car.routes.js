const express = require('express');
const router = express.Router();
const carController = require('../controllers/car.controller');
//const bookingController = require('../controllers/booking.controller');

// Route to get available cars for a given date range and city
router.get('/available', carController.getAvailableCars);

router.post('/', carController.createCar);  //MH01ac naya gadi post krne k liye
router.get('/', carController.getAllCars);  //sab gadi return ke liye
router.get('/active', carController.getActiveCars); //sirf active gadi return krne k liye

module.exports = router;