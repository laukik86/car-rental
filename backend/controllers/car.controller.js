const Car = require("../models/Car");

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

// Ger only active cars
exports.getActiveCars = async(req,res)=>{
    try{
        const cars = await Car.find({isActive:true});
        res.json(cars);
    }catch(err){
        res.status(500).json({error: err.message});
    }    
};