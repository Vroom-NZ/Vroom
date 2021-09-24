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

test('GET rides by start location, destination and date', () => {
  return db.getRides('auckland', 'abel tasman', '2021-10-14', testDb)
    .then(ride => {
      console.log(ride)
      expect(ride.id).toBe(1)
      expect(ride.startLocation).toBe('auckland')

      return null
    })
}
)
