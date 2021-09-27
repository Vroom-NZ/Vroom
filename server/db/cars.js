const connection = require('./connection')

function getCar (auth0Id, db = connection) {
  return db('cars')
    .where('user_id', auth0Id)
    .select()
    .then(result => {
      return result[0]
    })
}

function addCar (car, auth0Id, db = connection) {
  const { make, model, year, colour, licensePlate, registration, wof, seatsAvailable, petsAllowed } = car
  const newCar = { user_id: auth0Id, make, model, year, colour, license_plate: licensePlate, registration, wof, seats_available: seatsAvailable, pets_allowed: petsAllowed }
  return db('cars')
    .insert(newCar)
    .then(([id]) => {
      return {
        user_id: auth0Id,
        id: id,
        make: newCar.make,
        model: newCar.model,
        year: newCar.year,
        colour: newCar.colour,
        license_plate: newCar.license_plate,
        registration: newCar.registration,
        wof: newCar.wof,
        seats_available: newCar.seats_available,
        pets_allowed: newCar.pets_allowed
      }
    })
}

function deleteCar (userId, id, db = connection) {
  return db('cars')
    .where('user_Id', userId)
    .where('id', id)
    .del(id)
}

function updateCar (car, db = connection) {
  const { id, make, model, year, colour, licensePlate, registration, wof, seatsAvailable, petsAllowed } = car
  const updatedCar = { make, model, year, colour, license_plate: licensePlate, registration, wof, seats_available: seatsAvailable, pets_allowed: petsAllowed }
  return db('cars', updatedCar)
    .where('id', id)
    .update(updatedCar)
    .then(() => {
      return {
        id: id,
        make: updatedCar.make,
        model: updatedCar.model,
        year: updatedCar.year,
        colour: updatedCar.colour,
        license_plate: updatedCar.license_plate,
        registration: updatedCar.registration,
        wof: updatedCar.wof,
        seats_available: updatedCar.seats_available,
        pets_allowed: updatedCar.pets_allowed
      }
    })
}

module.exports = {
  getCar,
  deleteCar,
  addCar,
  updateCar
}
