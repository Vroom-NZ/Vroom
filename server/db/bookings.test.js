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
  return db.getBookedRides(testDb)
    .then(ride => {
      expect(ride).toHaveLength(3)
      return null
    })
}
)

test('POST book a ride', () => {
  const newRide = {
    auth0Id: 100100100,
    id: 3
  }
  const passengerId = 'auth|8612538'

  return db.bookRide(newRide, passengerId, testDb)
    .then(ride => {
      expect(ride.driver_id).toBe(100100100)
      return null
    })
})
