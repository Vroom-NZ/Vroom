const connection = require('./connection')

module.exports = {
  bookRide,
  getBookedRides
}

function bookRide (ride, passengerId, db = connection) {
  const { driverId, rideId } = ride
  const { auth0Id } = passengerId
  const newBooking = { driverId, rideId, auth0Id }
  return db('ridepassengers')
    // .join('rides', 'ride_id', 'rides.id')
    .insert(newBooking)
    .where('ride_id', rideId)
    .then(() => {
      return {
        driver_id: newBooking.driverId,
        ride_id: newBooking.rideId,
        passenger_id: newBooking.auth0Id
      }
    })
}

function getBookedRides (passengerId, db = connection) {
  return db('ridepassengers')
    .where('passenger_id', passengerId)
    .then((results) => {
      return results
    })
}
