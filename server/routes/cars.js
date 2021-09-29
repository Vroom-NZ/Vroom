const express = require('express')

const dbCars = require('../db/cars')
const dbUsers = require('../db/users')

const router = express.Router()

module.exports = router
// ap/v1/cars

router.post('/', async (req, res) => {
  const car = req.body.carRego
  const auth0Id = req.body.auth0Id
  try {
    await dbCars.addCar(car, auth0Id)
    await dbUsers.setHasCar(auth0Id)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert car into the database' })
  }
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  dbCars.getCar(id)
    .then(cars => {
      res.json(cars)
      return null
    }).catch(err => {
      console.error(err)
      res.status(500).send(err.message)
    })
})
