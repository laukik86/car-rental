const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
        },

        carId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Car',
            required:true,
        },
        startDate:{type: Date, required:true},
        endDate:{type:Date, required:true},

        totalPrice:{type:Number, required:true},

        status:{
            type: String,
            enum: ['booked', 'completed', 'cancelled'],
            default: 'booked',
        },

        paymentIntentId:{
            type:String,
            default:null
        },

        paymentStatus:{
            type: String,
            enum: ['not_required', 'succeeded', 'failed'],
            default: 'not_required',
        },
    },
    {
        timestamps: true,
    }
);

bookingSchema.index({ carId: 1, startDate: 1, endDate: 1 });

bookingSchema.pre("save", async function () {
  if (this.startDate >= this.endDate) {
    throw new Error("End date must be after start date");
  }
});

module.exports = mongoose.model('Booking', bookingSchema);