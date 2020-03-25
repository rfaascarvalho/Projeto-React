// Método UP sempre responsável pela criaçao da tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};

// Caso eu precisar voltar atrás da tabela, desfazer algo que fiz.
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
