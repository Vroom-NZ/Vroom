const connection = require('./connection')

function getRides (startLocation, destination, date, db = connection) {
  return db('rides')
    .join('users', 'user_id', 'users.id')
    .where('start_location', startLocation)
    .where('destination', destination)
    .where('date', date)
    .select()
    .then((result) => {
      return result[0]
    })
}

function getRidesById (userId, db = connection) { // to get rides for specific user
  return db('rides')
    .where('user_id', userId)
    .then((result) => {
      return result
    })
}

function addRide (userId, ride, db = connection) {
  const { startLocation, destination, date, leavingTime, estimatedArrivalTime, seatsAvailable, cost } = ride
  const newRide = { user_id: userId, start_location: startLocation, destination, date, leaving_time: leavingTime, estimated_arrival_time: estimatedArrivalTime, seats_available: seatsAvailable, cost }
  return db('rides')
    .insert(newRide)
    .where('user_id', userId)
    .then(([id]) => {
      return {
        id,
        user_id: newRide.user_id,
        startLocation: newRide.start_location,
        destination: newRide.destination,
        date: newRide.date,
        leavingTime: newRide.leaving_time,
        estimatedArrivalTime: newRide.estimated_arrival_time,
        seatsAvailable: newRide.seats_available,
        cost: newRide.cost
      }
    })
}

function updateRide (updatedRide, db = connection) {
  const { id, user_id: userId, start_location: startLocation, destination, date, leaving_time: leavingTime, estimated_arrival_time: estimatedArrivalTime, seats_available: seatsAvailable, cost } = updatedRide
  return db('rides')
    .where('id', id)
    .update(updatedRide)
    .then(() => {
      return {
        id,
        user_id: userId,
        start_location: startLocation,
        destination: destination,
        date: date,
        leaving_time: leavingTime,
        estimated_arrival_time: estimatedArrivalTime,
        seats_available: seatsAvailable,
        cost: cost
      }
    })
}

function deleteRide (id, userId, db = connection) {
  return db('rides')
    .where('user_id', userId)
    .where('rides.id', id)
    .del(id)
}

module.exports = {
  getRides,
  getRidesById,
  addRide,
  updateRide,
  deleteRide
}
