const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./cars')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('GET car by user id', () => {
  return db.getCar(1, testDb)
    .then(car => {
      expect(car[0].id).toBe(123)
      expect(car[0].model).toBe('starlet')
      return null
    })
}
)
