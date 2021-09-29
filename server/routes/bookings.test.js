const request = require('supertest')
const server = require('../server')
const db = require('../db/bookings')
jest.mock('../db/bookings')

test('GET getBookedRides returns all booked rides', () => {
  db.getBookedRides.mockImplementation(() => {
    return Promise.resolve([
      { driverId: '10001', rideId: 1, passengerId: 'auth21093707' },
      { driverId: '10002', rideId: 1, passengerId: 'auth21093708' },
      { driverId: '10003', rideId: 1, passengerId: 'auth21093709' }
    ])
  })
  return request(server)
    .get('/api/v1/bookings')
    .expect(200)
    .then((response) => {
      expect(response.body).toHaveLength(3)
      return null
    })
})

test('POST books a new ride', () => {
  db.bookRide = jest.fn()
  db.bookRide.mockImplementation(newBooking => {
    return Promise.resolve()
  })
  const newBooking = { driver_id: '10001', ride_id: 1, passenger_id: 'auth21093710' }
  return request(server)
    .post('/api/v1/bookings')
    .send(newBooking)
    .expect(201)
    .then((response) => {
      expect(response.status).toBe(201)
      return null
    })
})
