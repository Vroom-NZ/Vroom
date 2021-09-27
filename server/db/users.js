const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
    .select('id',
      'auth0_id as auth0Id',
      'first_name as firstName',
      'email',
      'description',
      'phone_number as phoneNumber',
      'bio',
      'profile_pic as profilePic',
      'rating',
      'has_vehicle as hasVehicle',
      'is_driver as isDriver',
      'car_id as carId')
}

function getUser (auth0Id, db = connection) {
  return db('users')
    .where('auth0_id', auth0Id)
    .select('id',
      'auth0_id as auth0Id',
      'first_name as firstName',
      'email',
      'description',
      'phone_number as phoneNumber',
      'bio',
      'profile_pic as profilePic',
      'rating',
      'has_vehicle as hasVehicle',
      'is_driver as isDriver',
      'car_id as carId')
    .first()
}

function setHasCar (auth0Id, db = connection) {
  console.log('auth0: ', auth0Id)
  return db('users')
    .where('auth0_id', auth0Id)
    .update('has_vehicle', true)
}

function addUser (user, db = connection) {
  const { auth0Id, email, firstName, lastName, phoneNumber } = user
  const newUser = { auth0_id: auth0Id, first_name: firstName, last_name: lastName, email, phone_number: phoneNumber }
  return db('users')
    .insert(newUser)
}

// function bookRide (auth0Id, rideId, db = connection) {
//   return db('users')
//     .where('auth0_id', auth0Id)
//     .update('ride_id', rideId)
// }

module.exports = {
  getUsers,
  getUser,
  setHasCar,
  addUser
}
