const connection = require('./connection')

function getRides (startLocation, destination, date, db = connection) {
  return db('rides')
    .join('users', 'user_id', 'users.id')
    .where('start_location', startLocation)
    .where('destination', destination)
    .where('date', date)
    .select(
      'rides.id',
      'users.first_name as driverFirstName',
      'users.last_name as driverLastName',
      'users.rating as rating',
      'users.profile_pic as profilePic',
      'start_location as startLocation',
      'leaving_time as leavingTime',
      'estimated_arrival_time as eta',
      'destination',
      'date',
      'seats_available as seatsAvailable',
      'cost'
    )
    .then(([id]) => {
      return id
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

function updateRide (userId, ride, db = connection) {
  const { id, startLocation, destination, date, leavingTime, estimatedArrivalTime, seatsAvailable, cost } = ride
  const updateRide = { id: id, user_id: userId, start_location: startLocation, destination, date, leaving_time: leavingTime, estimated_arrival_time: estimatedArrivalTime, seats_available: seatsAvailable, cost }
  return db('rides')
    .where('id', id)
    .update(updateRide)
    .then(() => {
      console.log(updateRide.start_location)
      return {
        id,
        user_id: userId,
        start_location: updateRide.startLocation,
        destination: updateRide.destination,
        date: updateRide.date,
        leaving_time: updateRide.leaving_time,
        estimated_arrival_time: updateRide.estimated_arrival_time,
        seats_available: updateRide.seats_available,
        cost: updateRide.cost
      }
    })
}

module.exports = {
  getRides,
  addRide,
  updateRide
}
