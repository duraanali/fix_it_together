exports.up = function(knex) {
    return knex.schema.createTable('posts', posts=>{
        posts
        .increments()
  
        posts
        .timestamp('created_at').defaultTo(knex.fn.now())

        posts
        .integer('creator_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')

        posts
        .string('title').notNullable()

        posts
        .string('desc').notNullable()

        posts
        .integer('upvotes')

        posts
        .integer('downvotes')

        posts
        .boolean('resolved')
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts')
  };