
// método up sempre responsável pela criação da table
exports.up = function (knex) {
 return knex.schema.createTable('users', function (table) {
  table.increments('id').primary();
  table.string('name', 30).notNullable();
 })
};

// deletar caso algo der errado no up
exports.down = function (knex) {
 return knex.schema.dropTable('users')
};
