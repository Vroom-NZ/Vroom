exports.up = (knex) => {
  return knex.schema.createTable('ridepassengers', (table) => {
    table.increments('id').primary()
    table.integer('ride_id').references('rides.id')
    table.integer('passengers_id').references('users.auth0_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('ridepassengers')
}
