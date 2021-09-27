const express = require('express')

const dbBookings = require('../db/bookings')

const router = express.Router()

// Get a users booked ridesRoutes

router.get('/', (req, res) => {
  dbBookings.getBookedRides()
    .then(bookings => {
      res.json(bookings)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// User can book a ride with

router.post('/', async (req, res) => {
  const ride = req.body.ride
  const user = req.body.auth
  try {
    await dbBookings.bookRide(ride, user)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert rides into the database' })
  }
})

module.exports = router
