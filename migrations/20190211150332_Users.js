/*
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
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

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

// run the migration in terminal
// knex migrate: latest
*/


exports.up = function(knex, Promise) {
  knex.schema.dropTableIfExists('users')
  .then(() => {
    return knex.schema.createTable('users', (table) => {
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
  })
  .then(() => {
    // table created
  })
  .catch((error) => {
    console.log('error: ', error);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

// run the migration in terminal
// knex migrate: latest

// now that this works, create the seed with the command
// knex seed:make 01_user
