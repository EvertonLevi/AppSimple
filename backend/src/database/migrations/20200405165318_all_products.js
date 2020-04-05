//TODO falta criar os tipos de produtos para uma busca avançada - usar table.enum
exports.up = function (knex) {
 return knex.schema.createTable('products', function (table) {
  // table.string('user_id').notNullable()
  table.string('id').primary().notNullable()
  table.string('name').primary().notNullable()
  table.string('description', 50).notNullable()
  table.decimal('price', 6).notNullable()
  table.decimal('condition', 2).notNullable()
  // junto este ID, referenciando o ID da table USERS para mostrar Favorito
  table.foreign('id').references('id').inTable('users')
  table.boolean('favorite').notNullable().defaultTo(false)

 })
};

exports.down = function (knex) {
 return knex.schema.dropTable('products')
};
