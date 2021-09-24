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

module.exports = { getRides }
