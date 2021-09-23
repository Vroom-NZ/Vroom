exports.up = (knex) => {
  return knex.schema.createTable('cars', (table) => {
    table.increments('id').primary()
    table.integer('user_id') // joins to table user.id
    table.string('make')
    table.string('model')
    table.integer('year')
    table.string('colour')
    table.string('license_plate')
    table.boolean('registration')
    table.boolean('wof')
    table.integer('seats_available')
    table.boolean('pets_allowed')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('cars')
}
