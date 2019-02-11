const Sequelize = require('sequelize');
const db = new Sequelize('menubar', 'postgres', 'postgres', {
  host: 'ec2-18-223-211-18.us-east-2.compute.amazonaws.com',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// const db = new Sequelize('sdc_menu_bar', 'joeboulos', 'joe12345', {
//   host: 'sdc-menu-bar-component.c9xmi906eefk.us-east-2.rds.amazonaws.com',
//   dialect: 'postgres',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });

// const db = new Sequelize('sdc-menu-bar-component', 'joeboulos', 'joe12345', {
//   host: 'sdc-menu-bar-component.c9xmi906eefk.us-east-2.rds.amazonaws.com',
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