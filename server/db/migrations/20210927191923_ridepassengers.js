exports.up = (knex) => {
  return knex.schema.createTable('ridepassengers', (table) => {
    table.string('driver_id').references('rides.auth0_id')
    table.integer('ride_id').references('rides.id')
    table.string('passenger_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('ridepassengers')
}
