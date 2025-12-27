const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
    {
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

        location:String,

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

