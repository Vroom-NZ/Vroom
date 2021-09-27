const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./bookings')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('GET booked rides', () => {
  return db.getBookedRides('auth0|614c009c298e0400716ded6c', testDb)
    .then(ride => {
      expect(ride.ride_id).toBe(2)
      return null
    })
}
)

test('POST book a ride', () => {
  const newRide = {
    driverId: 100100100,
    rideId: 3
  }
  const passengerId = 'auth|8612538'

  return db.bookRide(newRide, passengerId, testDb)
    .then(ride => {
      console.log('booking test result:', ride)
      expect(ride.driver_id).toBe(100100100)
      return null
    })
})
