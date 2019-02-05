const Sequelize = require('sequelize');
const db = new Sequelize('sdc-menu-bar-component', 'joeboulos', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// test db connection
db.authenticate()
  .then(() => console.log('connected to postgreSQL'))
  .catch(err => console.log('ERROR ' + err))

const UserDb = db.define('users', {
	user_id: {
		type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
	},
	display_name: {
		type: Sequelize.STRING
	},
	logo:{
		type: Sequelize.STRING
	},
	profile_image_url: {
		type: Sequelize.STRING
	},
	category: {
		type: Sequelize.STRING
	},
	followers: {
		type: Sequelize.STRING
	},
	Following: {
		type: Sequelize.STRING
	}
})

UserDb.sync({
	alter: true,
	// force: true,
})

module.exports = db;
module.exports= UserDb;