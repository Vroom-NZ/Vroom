exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|614bae6761718e0069e37cff',
          first_name: 'kieran',
          last_name: 'tahir',
          email: 'kierantahir@gmail.com',
          description: 'admin', // access type
          phone_number: '021020304',
          bio: 'sup',
          profile_pic: './pic/1.jpg',
          rating: '4.5',
          has_vehicle: true,
          is_driver: false,
          car_id: 123
        }
      ])
    })
}
