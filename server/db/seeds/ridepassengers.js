exports.seed = function (knex) {
  return knex('ridepassengers').del()
    .then(function () {
      return knex('ridepassengers').insert([
        {
          driver_id: 200200200,
          ride_id: 1,
          passenger_id: 'auth0|614c009c298e0400716ded6c'
        },
        {
          driver_id: 100100100,
          ride_id: 2,
          passenger_id: 'auth0|614c009c298e0400716ded6c'
        },
        {
          driver_id: 200200200,
          ride_id: 3,
          passenger_id: 'auth0|614bae6761718e0069e37cff'
        }
      ])
    })
}
