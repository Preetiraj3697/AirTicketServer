const express = require('express');
const Booking = require('../Model/Booking');
const User = require('../Model/User');
const Flight = require('../Model/Flight');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body.flight)
  try {
    const { flightId } = req.body.flight;
    const flight = await Flight.findById(flightId);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    const booking = new Booking({
      user: req.userId,
      flight: flight._id,
    });

    // save booking to database
    const savedBooking = await booking.save();

    // add booking reference to user
    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        $push: { bookings: savedBooking._id },
      },
      { new: true }
    );

    res.status(201).json({ booking: savedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
