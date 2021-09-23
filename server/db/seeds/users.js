exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|614bae6761718e0069e37cff',
          name: 'kierantahir',
          email: 'kierantahir@gmail.com',
          description: 'admin'
        }
      ])
    })
}
