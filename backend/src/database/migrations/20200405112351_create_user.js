
// método up sempre responsável pela criação da table
exports.up = function (knex) {
 return knex.schema.createTable('users', function (table) {
  table.string('id').primary().notNullable()
  table.string('name', 30).notNullable();
  table.string('password', 8).notNullable();
  table.string('email').notNullable();
  table.string('pictures', [100])

  // table.string('product_id').notNullable();
  // junto este ID, referenciando o ID da table PRODUCTS 
 })
};

// deletar caso algo der errado no up
exports.down = function (knex) {
 return knex.schema.dropTable('users')
};
