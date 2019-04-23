// const knex = require('knex');

exports.up = function(knex, Promise) {
  knex.schema.createTable('Users', table => {
    table.increments('user_id').primary();
    table.string('display_name');
    // logo string
    table.string('logo');
    // profile_image_url string
    table.string('profile_image_url');
    // category string
    table.string('category');
    // followers integer
    table.integer('followers');
    // Following integer
    table.integer('Following');
  })
  .finally(function(queryResult){
    knex.destroy();
  })
  .catch(console.error);
}
