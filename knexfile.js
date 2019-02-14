const { postgresURI, postgresUser, postgresPW, postgresDB } = require('./config/keys');

// in terminal, run knex init to generate this template
// use this knex file, not the one in database folder
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: postgresURI,
      user: postgresUser,
      password: postgresPW,
      database: postgresDB
    },
    migrations: {
      tableName: 'users'
    },
    seeds: {
      directory: __dirname + "/seeds"
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: postgresDB,
      user:     postgresUser,
      password: postgresPW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'users'
    }
  },

};
