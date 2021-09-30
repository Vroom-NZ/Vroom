exports.seed = function (knex) {
  return knex('rides').del()
    .then(function () {
      return knex('rides').insert([
        {
          id: 1, // ride id
          auth0_id: 200200200,
          start_location: 'Auckland',
          destination: 'Hamilton',
          date: '2021-10-14',
          leaving_time: '18:00',
          estimated_arrival_time: '20:00',
          seats_available: 4,
          cost: 20
        },
        {
          id: 2, // ride id
          auth0_id: 100100100,
          start_location: 'Auckland',
          destination: 'Tairua',
          date: '2021-10-08',
          leaving_time: '18:00',
          estimated_arrival_time: '20:00',
          seats_available: 4,
          cost: 10
        },
        {
          id: 3, // ride id
          auth0_id: 200200200,
          start_location: 'Auckland',
          destination: 'Tairua',
          date: '2021-10-08',
          leaving_time: '18:00',
          estimated_arrival_time: '19:45',
          seats_available: 2,
          cost: 15
        }
      ])
    })
}
