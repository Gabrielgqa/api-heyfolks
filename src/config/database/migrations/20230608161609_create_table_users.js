exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
