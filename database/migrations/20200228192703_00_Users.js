exports.up = function(knex) {
    return knex.schema.createTable('users', users=>{
        users
        .increments()
  
        users
        .string('username',128)
        .notNullable()
        .unique()
  
        users
        .string('password',128)
        .notNullable()
  
        users
        .timestamp('created_at').defaultTo(knex.fn.now())

        users
        .string('first_name', 128)

        users
        .string('last_name', 128)

        users
        .string('email', 128)

        users
        .integer('prize_points')

        users
        .string('zipcode', 128)

        users
        .string('city', 128)

        users
        .string('state', 128)
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
  };