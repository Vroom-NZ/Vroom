const express = require('express')

const dbRides = require('../db/rides')

const router = express.Router()

module.exports = router

// GET rides posted by individual driver

router.get('/', (req, res) => {
  dbRides.getRidesById()
    .then(async rides => {
      res.json({ rides })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})
