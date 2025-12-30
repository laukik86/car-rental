const Booking = require("../models/Booking");
const Car = require("../models/Car");

exports.createBooking = async (req, res) => {
  try {
    const { userId, carId, startDate, endDate } = req.body;

    if (!userId || !carId || !startDate || !endDate) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start >= end) {
      return res.status(400).json({ error: "Invalid date range" });
    }

    // 1️⃣ Check car exists & active
    const car = await Car.findById(carId);
    if (!car || !car.isActive) {
      return res.status(404).json({ error: "Car not available" });
    }

    // 2️⃣ Check overlapping bookings
    const conflict = await Booking.findOne({
      carId,
      status: "booked",
      startDate: { $lte: end },
      endDate: { $gte: start },
    });

    if (conflict) {
      return res.status(400).json({ error: "Car already booked for selected dates" });
    }

    // 3️⃣ Calculate price
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const days = Math.ceil((end - start) / MS_PER_DAY);
    const totalPrice = days * car.pricePerDay;

    // 4️⃣ Create booking
    const booking = await Booking.create({
      userId,
      carId,
      startDate: start,
      endDate: end,
      totalPrice,
      paymentStatus: "not_required",
    });

    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
