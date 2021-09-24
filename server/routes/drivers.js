const express = require('express')

// const dbUser = require('../db/users')
const dbRides = require('../db/rides')
// const dbCar = require('../db/cars')

const router = express.Router()

// ROUTE api/v1/drivers/

router.get('/', (req, res) => {
  dbRides.getRides()
    .then(async rides => {
      res.json({ rides })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
