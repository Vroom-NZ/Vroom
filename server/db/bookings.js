const connection = require('./connection')

module.exports = {
  bookRide,
  getBookedRides
}

function bookRide (rideDetails, passengerId, db = connection) {
  const { auth0Id, id } = rideDetails
  const newBooking = { driver_id: auth0Id, ride_id: id, passenger_id: passengerId }
  return db('ridepassengers')
    .insert(newBooking)
    .where('ride_id', id)
    .then(([id]) => {
      return {
        driver_id: newBooking.driver_id,
        ride_id: id,
        passenger_id: newBooking.passenger_id
      }
    })
}

// function getBookedRides (passengerId, db = connection) {
//   return db('ridepassengers')
//     .where('passenger_id', passengerId)
//     .then((result) => {
//       return result
//     })
// }

function getBookedRides (db = connection) {
  return db('ridepassengers')
    .select(
      'driver_id as driverId',
      'ride_id as rideId',
      'passenger_id as passengerId'
    )
}
