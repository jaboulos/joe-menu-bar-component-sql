
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
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
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('Users'),
  ]);
};

// module.exports = db;
// module.exports= UserDb;