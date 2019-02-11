const fakeData = require('../fakeData')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      // create an object that has all of the properties of the table you created
      return knex('users').insert(fakeData);
    });
};

// run the seed
// knex seed:run