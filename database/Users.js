
// const { postgresURI, postgresUser, postgresPW, postgresDB } = require('../config/keys');
// const db = new Sequelize(postgresDB, postgresUser, postgresPW, {
//   host: postgresURI,
//   dialect: 'postgres',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });


// test db connection
// db.authenticate()
//   .then(() => console.log('connected to postgreSQL'))
//   .catch(err => console.log('ERROR ' + err))

// const UserDb = db.define('users', {
// 	user_id: {
// 		type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
// 	},
// 	display_name: {
// 		type: Sequelize.STRING
// 	},
// 	logo:{
// 		type: Sequelize.STRING
// 	},
// 	profile_image_url: {
// 		type: Sequelize.STRING
// 	},
// 	category: {
// 		type: Sequelize.STRING
// 	},
// 	followers: {
// 		type: Sequelize.STRING
// 	},
// 	Following: {
// 		type: Sequelize.STRING
// 	}
// })

// UserDb.sync({
// 	alter: true,
// 	// force: true,
// })

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
    knex.schema.dropTable('users'),
  ]);
};

// module.exports = db;
// module.exports= UserDb;