const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./rides')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('GET all rides', () => {
  return db.getAllRides(testDb)
    .then(ride => {
      expect(ride).toHaveLength(3)

      return null
    })
}
)

test('ADD new rides', () => {
  const newRide = {
    startLocation: 'auckland',
    destination: 'wellington',
    date: '2021-10-14',
    leavingTime: '18:00:00',
    estimatedArrivalTime: '24:00:00',
    seatsAvailable: 2,
    cost: 40
  }
  return db.addRide(newRide, 2, testDb)
    .then(ride => {
      expect(ride.startLocation).toBe('auckland')
      return null
    })
})

test('UPDATE existing ride', () => {
  const updatedRide = {
    id: 1,
    auth0_id: 1,
    start_location: 'wellington',
    destination: 'rotorua',
    date: '2021-10-14',
    leaving_time: '18:00:00',
    estimated_arrival_time: '20:00:00',
    seats_available: 4,
    cost: 20
  }
  return db.updateRide(updatedRide, testDb)
    .then((ride) => {
      expect(ride.start_location).toBe('wellington')
      return null
    })
})

test('DELETE ride by id', () => {
  return db.deleteRide(1, 1, testDb)
    .then(() => {
      return db.getRidesById(1, testDb)
        .then(ride => {
          expect(ride).toHaveLength(0)
          return null
        })
    })
})
