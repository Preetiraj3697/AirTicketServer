const express = require('express');
const Booking = require('../Model/Booking');
const FlightModule = require('../Model/Flight')
const UsersModule = require('../Model/User')
const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body)
  const payload = req.body;
  try {
    let user=payload.user;
    let flight=payload.flight
    const Flight = await FlightModule.findOne({_id:flight});
    const User= await UsersModule.findOne({_id:user})
    const newBooking = new Booking({user:User,flight:Flight});
    await newBooking.save();
    res.status(201).json({ newBooking, message: "Book successfully" });
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

module.exports = router;
