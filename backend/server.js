require("dotenv").config();
const express =require("express");
const mongoose=require("mongoose");
const cors = require("cors");

const app=express();

app.use(cors({
  origin: "https://car-rental-rk2r.vercel.app/"
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected to MongoDB"))
    .catch((err)=>console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("backend is running" );
});
const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 