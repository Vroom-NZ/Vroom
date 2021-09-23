exports.seed = function (knex) {
  return knex('rides').del()
    .then(function () {
      return knex('rides').insert([
        {
          id: 1, // ride id
          user_id: 1,
          start_location: 'auckland',
          destination: 'abel tasman',
          date: '2021-10-14',
          leaving_time: '18:00:00',
          estimated_arrival_time: '20:00:00',
          seats_available: 4,
          cost: 20
        }
      ])
    })
}
