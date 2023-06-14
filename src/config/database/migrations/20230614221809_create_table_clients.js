exports.up = function(knex) {
    return knex.schema.createTable('clients', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('last_name').notNullable();
      table.date('birth_date').notNullable();
      table.boolean('active').notNullable().defaultTo(true);
      table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
      table.timestamp('created_at').defaultTo(knex.raw('now()'));
      table.timestamp('updated_at').defaultTo(knex.raw('now()'));
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('clients')
};
  