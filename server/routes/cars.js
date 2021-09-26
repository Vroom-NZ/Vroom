const express = require('express')

const dbCars = require('../db/cars')

const router = express.Router()

module.exports = router

router.post('/', async (req, res) => {
  const car = req.body.carRego
  const user = req.body.auth
  try {
    await dbCars.addCar(car, user)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert car into the database' })
  }
})
