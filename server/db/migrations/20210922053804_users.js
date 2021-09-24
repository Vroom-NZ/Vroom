exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('auth0_id')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('description') // access type e.g admin, moderator, general user
    table.string('phone_number')
    table.string('bio')
    table.string('profile_pic')
    table.float('rating')
    table.boolean('has_vehicle')
    table.boolean('is_driver')
    table.integer('car_id') // joined to cars table.id
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
