const express = require('express');
const Flight = require('../Model/Flight');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find();

    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price } = req.body;

    // create new flight
    const newFlight = new Flight({
      airline,
      flightNo,
      departure,
      arrival,
      departureTime,
      arrivalTime,
      seats,
      price
    });

    await newFlight.save();

    res.json({ message: 'Flight added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);

    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    res.json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/:id', async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id);
  
      if (!flight) {
        return res.status(404).json({ message: 'Flight not found' });
      }
  
      // update flight data
      const { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price } = req.body;
      flight.airline = airline;
      flight.flightNo = flightNo;
      flight.departure = departure;
      flight.arrival = arrival;
      flight.departureTime = departureTime;
      flight.arrivalTime = arrivalTime;
      flight.seats = seats;
      flight.price = price;
  
      await flight.save();
  
      res.json({ message: 'Flight updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id);
  
      if (!flight) {
        return res.status(404).json({ message: 'Flight not found' });
      }
  
      await flight.remove();
  
      res.json({ message: 'Flight deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  module.exports = router;
  
