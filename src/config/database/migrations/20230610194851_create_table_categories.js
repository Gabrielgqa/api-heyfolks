exports.up = function(knex) {
    return knex.schema.createTable('categories', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description');
      table.timestamp('created_at').defaultTo(knex.raw('now()'));
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('categories')
};
  