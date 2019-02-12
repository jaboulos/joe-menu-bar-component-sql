exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', (table) => {
    // user_id increments, primary
    table.increments('user_id').primary();
    // display_name string
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
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('users');
};