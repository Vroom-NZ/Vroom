exports.up = (knex) => {
  return knex.schema.createTable('rides', (table) => {
    table.increments('id').primary()
    table.string('auth0_id').references('users.auth0_id') // joins to table user.id
    // table.string('auth0_id_driver').references('users.auth0_id') // joins to table user.id
    // table.string('auth0_id_passenger').references('users.auth0_id') // joins to table user.id

    table.string('start_location')
    table.string('destination')
    table.date('date')
    table.time('leaving_time')
    table.time('estimated_arrival_time')
    table.integer('seats_available')
    table.integer('cost')
    // table.specificType('passengerarray', 'text ARRAY')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('rides')
}
