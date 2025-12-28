const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
    {   
        registrationNumber: {
            type: String,
            required: true,
            unique: true,
            uppercase: true, // MH12AB1234
            trim: true,
        },
        
        name:{type: String, required:true},
        brand:String,

        type:{
            type: String,
            enum: ['Sedan', 'suv','Hatchback'],
        },

        pricePerDay:{
            type: Number,
            required:true,
        },

        location: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        isActive:{
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Car', carSchema);

