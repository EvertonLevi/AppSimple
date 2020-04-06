
exports.up = function (knex) {
 return knex.schema.createTable('favorites', function (table) {
  table.string('id').primary().notNullable()
  table.foreign('id').references('id').inTable('products');
  table.foreign('id').references('id').inTable('users')
 })
};

exports.down = function (knex) {
 return knex.schema.dropTable('favorites')
};
