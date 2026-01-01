require("dotenv").config();
const express = require("express");
const mongoose= require("mongoose");
const cors = require("cors");
const carRoutes = require("./routes/car.routes");

const authRoutes = require("./routes/auth.routes");

const bookingRoutes = require("./routes/booking.routes");


const app=express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://car-rental-rk2r.vercel.app"
];

app.use(cors({

  

  origin: function (origin, callback) {
    // allow requests with no origin (Postman, Thunder Client)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

}));


app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected to MongoDB"))
    .catch((err)=>console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("backend is running" );
});

// Car routes
app.use("/api/cars", carRoutes);
//booking routes
app.use("/api/bookings", bookingRoutes);
// Auth routes
app.use("/api/auth", authRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 