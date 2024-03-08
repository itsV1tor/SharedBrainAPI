export function up(knex) {
  return knex.schema.createTable('Posts', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.text('content');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema.dropTable('Posts');
}
