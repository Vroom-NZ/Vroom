const connection = require('./connection')

module.exports = {
  bookRide,
  getBookedRides
}

function bookRide (ride, passengerId, db = connection) {
  const { driverId, rideId } = ride
  const newBooking = { driver_id: driverId, ride_id: rideId, passenger_id: passengerId }
  return db('ridepassengers')
    .insert(newBooking)
    .where('ride_id', rideId)
    .then(([id]) => {
      console.log('bookings db results:', id)
      return {
        driver_id: newBooking.driver_id,
        ride_id: id,
        passenger_id: newBooking.passenger_id
      }
    })
}

function getBookedRides (passengerId, db = connection) {
  return db('ridepassengers')
    .where('passenger_id', passengerId)
    .select()
    .then(([results]) => {
      return results
    })
}
