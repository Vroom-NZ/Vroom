const connection = require('./connection')

function getRides (startLocation, destination, date, db = connection) {
  return db('rides')
    .join('users', 'auth0_id', 'users.auth0_id')
    .where('start_location', startLocation)
    .where('destination', destination)
    .where('date', date)
    .select()
    .then((result) => {
      return result[0]
    })
}

function getAllRides (db = connection) {
  return db('rides').select(
    'id',
    'auth0_id as auth0Id',
    'first_name as firstName',
    'last_name as lastName',
    'start_location as startLocation',
    'destination',
    'date',
    'leaving_time as leavingTime',
    'estimated_arrival_time as arrivalTime',
    'seats_available as seatsAvailable',
    'cost'
  )
}

function getRidesById (auth0Id, db = connection) { // to get rides for specific user
  return db('rides')
    .where('auth0_id', auth0Id)
    .then((result) => {
      return result
    })
}

function addRide (ride, id, db = connection) {
  const { auth0Id } = id
  const { startLocation, destination, date, leavingTime, arrivalTime, seatsAvailable, cost } = ride
  const newRide = { auth0_id: auth0Id, start_location: startLocation, destination, date, leaving_time: leavingTime, estimated_arrival_time: arrivalTime, seats_available: seatsAvailable, cost }
  return db('rides')
    .insert(newRide)
    .where('auth0_id', auth0Id)
    .then(([id]) => {
      return {
        id,
        auth0Id: newRide.auth0Id,
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
  const { id, auth0_id: auth0Id, start_location: startLocation, destination, date, leaving_time: leavingTime, estimated_arrival_time: estimatedArrivalTime, seats_available: seatsAvailable, cost } = updatedRide
  return db('rides')
    .where('id', id)
    .update(updatedRide)
    .then(() => {
      return {
        id,
        auth0_id: auth0Id,
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

function deleteRide (id, user, db = connection) {
  return db('rides')
    .where('auth0_id', user)
    .where('rides.id', id)
    .del(id)
}

module.exports = {
  getRides,
  getRidesById,
  addRide,
  updateRide,
  deleteRide,
  getAllRides
}
