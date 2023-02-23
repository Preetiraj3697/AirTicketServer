const express = require('express');
const Booking = require('../Model/Booking');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { flightId } = req.body;

    // check if flight exists
    const flight = await Flight.findById(flightId);
    if (!flight) {
      return res.status(400).json({ message: 'Invalid flight ID' });
    }

    // create new booking
    const newBooking = new Booking({
      user: req.userId,
      flight: flightId
    });

    await newBooking.save();

    res.json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId }).populate('flight');

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
