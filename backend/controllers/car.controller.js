const Car = require("../models/Car");
const Booking = require("../models/Booking");

// Create a new car
exports.createCar = async(req,res)=>{
    try{
        const car = await Car.create(req.body);
        res.status(201).json(car);
    }catch(err){
        res.status(400).json({error: err.message});
    }
};

exports.getAllCars = async(req,res)=>{
    try{
        const cars = await Car.find();
        res.json(cars);
    }catch(err){
        res.status(500).json({error: err.message});
    }   
};

// Get only active cars
exports.getActiveCars = async(req,res)=>{
    try{
        const cars = await Car.find({isActive:true});
        res.json(cars);
    }catch(err){
        res.status(500).json({error: err.message});
    }    
};

//available cars for given date range
exports.getAvailableCars = async (req, res) => {
  try {
    const { location, startDate, endDate } = req.query;

    if (!location || !startDate || !endDate) {
      return res.status(400).json({
        error: "Please provide location, startDate and endDate",
      });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    //console.log("Start:", start, "End:", end);
    //console.log("Query params:", req.query);
    //console.log("DB locations:", await Car.distinct("location"));



    if (start >= end) {
      return res.status(400).json({
        error: "startDate must be before endDate",
      });
    }

    const bookedCarIds = await Booking.find({
      status: "booked",
      startDate: { $lte: end },
      endDate: { $gte: start },
    }).distinct("carId");
    

    const availableCars = await Car.find({
      location: location.trim(),
      isActive: true,
      _id: { $nin: bookedCarIds },
    });

    res.json(availableCars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
