const express = require('express');
const router = express.Router();
const carController = require('../controllers/car.controller');


router.post('/', carController.createCar);
router.get('/', carController.getAllCars);
router.get('/active', carController.getActiveCars);

module.exports = router;