exports.seed = function (knex) {
  return knex('ridepassengers').del()
    .then(function () {
      return knex('ridepassengers').insert([
        {
          driver_id: 100100100,
          ride_id: 2,
          passenger_id: 'auth0|614c009c298e0400716ded6c'
        }
      ])
    })
}
