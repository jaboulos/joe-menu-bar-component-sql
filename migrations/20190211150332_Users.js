exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary();
    table.string('display_name');
    table.string('logo');
    table.string('profile_image_url');
    table.string('category');
    table.integer('followers');
    table.integer('following');
  })
};

// roll back the migration
exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('users');
};