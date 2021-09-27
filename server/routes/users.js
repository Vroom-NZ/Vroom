const express = require('express')
const { getUser } = require('../db/users')

const db = require('../db/users')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(async users => {
      res.json({ users })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', async (req, res) => {
  const { auth0Id, email } = req.body.user
  const { firstName, lastName, phoneNumber } = req.body.values
  const user = { auth0Id, email, firstName, lastName, phoneNumber }

  try {
    await db.addUser(user)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert user into the database' })
  }
})

router.get('/:auth0id', async (req, res) => {
  try {
    const auth0id = req.params.auth0id
    const user = await getUser(auth0id)
    res.json({ user })
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: 'unable to retreive user' })
  }
})

module.exports = router
