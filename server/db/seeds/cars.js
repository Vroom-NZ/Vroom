exports.seed = function (knex) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([
        {
          id: 123,
          user_id: 1,
          make: 'toyota',
          model: 'starlet',
          year: '1996',
          colour: 'purple',
          license_plate: 'alx420',
          registration: true,
          wof: false,
          seats_available: 4,
          pets_allowed: true
        }
      ])
    })
}
