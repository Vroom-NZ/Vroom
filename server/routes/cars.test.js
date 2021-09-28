const request = require('supertest')
const server = require('../server')
const db = require('../db/cars')
const dbUsers = require('../db/users')
// const { test } = require('../db/knexfile')
jest.mock('../db/cars')

test('GET getCars returns a car', () => {
  db.getCar.mockImplementation(() => {
    return Promise.resolve([
      { id: 1, user_id: 11, make: 'toyota', model: 'starlet', year: 1996, colour: 'purple', registration: 'yeee', wof: 'sure', seats_available: true, pets_allowed: true },
      { id: 2, user_id: 22, make: 'tesla', model: 'starlet', year: 1996, colour: 'purple', registration: 'yeee', wof: 'sure', seats_available: true, pets_allowed: true }
    ])
  })
  return request(server)
    .get('/api/v1/cars/1')
    .expect(200)
    .then((response) => {
      expect(response.body[1].make).toBe('tesla')
      expect(response.status).toBe(200)
      return null
    })
})

test('POST adds new car', () => {
  db.addCar = jest.fn()
  db.addCar.mockImplementation(newCar => {
    return Promise.resolve()
  })
  dbUsers.setHasCar = jest.fn()
  dbUsers.setHasCar.mockImplementation(newCar => {
    return Promise.resolve()
  })

  const newCar = { id: 3, user_id: 12, make: 'toyota', model: 'lambo', year: 1996, colour: 'purple', registration: 'yeee', wof: 'sure', seats_available: true, pets_allowed: true }
  const auth0Id = { auth0Id: 'auth69420', has_vehicle: true }
  return request(server)
    .post('/api/v1/cars')
    .send(newCar, auth0Id)
    .send(auth0Id)
    .expect(201)
    .then((response) => {
      expect(response.status).toBe(201)
      return null
    })
})
