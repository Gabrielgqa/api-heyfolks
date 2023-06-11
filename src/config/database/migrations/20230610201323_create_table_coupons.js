exports.up = function(knex) {
    return knex.schema.createTable('coupons', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('type').notNullable();
      table.decimal('value').notNullable();
      table.boolean('active').notNullable().defaultTo(true);
      table.string('description');
      table.timestamp('created_at').defaultTo(knex.raw('now()'));
      table.timestamp('updated_at').defaultTo(knex.raw('now()'));
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('coupons')
};
  