const express = require('express')

const dbRides = require('../db/rides')

const router = express.Router()

// ROUTE api/v1/rides/

router.get('/', (req, res) => {
  dbRides.getAllRides()
    .then(rides => {
      res.json(rides)
      return null
    }).catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', async (req, res) => {
  const ride = req.body.newRide
  const user = req.body.auth
  try {
    await dbRides.addRide(ride, user)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert rides into the database' })
  }
})

module.exports = router
