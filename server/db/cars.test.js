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
  const testCar = {
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
  return db.addCar(testCar, 2, testDb)
    .then(car => {
      console.log('make:', car)
      expect(car.id).toBe(124)
      expect(car.make).toBe('mazda')
      return null
    })
})

test('DELETE car by id', () => {
  return db.deleteCar(1, 123, testDb)
    .then(() => {
      return db.getCar(1, testDb)
        .then(car => {
          expect(car).toBeUndefined()
          return null
        })
    })
})

test('UPDATE car by id', () => {
  const updatedCar = {
    id: 123,
    make: 'mazda',
    model: 'bongo',
    year: 2001,
    colour: 'black',
    license_plate: 'JVM123',
    registration: true,
    wof: true,
    seats_available: 2,
    pets_allowed: false
  }
  return db.updateCar(updatedCar, testDb)
    .then((car) => {
      expect(car.model).toBe('bongo')
      expect(car.pets_allowed).toBeFalsy()
      return null
    })
})
