const { postgresURI, postgresUser, postgresPW, postgresDB } = require('../config/keys');

// in terminal, run knex init to generate this template
// use knexfile in root folder
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: postgresURI,
      user: postgresUser,
      password: postgresPW,
      database: postgresDB
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

