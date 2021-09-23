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
      expect(car.id).toBe(123)
      expect(car.model).toBe('starlet')
      return null
    })
}
)

test('ADD car by user id', () => {
  const newCar = {
    make: 'mazda',
    model: 'axela',
    year: 2005,
    colour: 'black',
    license_plate: 'JVM123',
    registration: true,
    wof: true,
    seats_available: 2,
    pets_allowed: true
  }
  return db.addCar(2, newCar, testDb)
    .then(car => {
      console.log(car)
      expect(car.id).toBe(124)
      expect(car.make).toBe('mazda')
      return null
    })
})
