const fakeData = require('../fakeData');
const faker = require('faker');

// set this to en_US so faker generated data is in english
faker.locale = 'en_US';

// stack overflow recommendation, node property
require('events').EventEmitter.prototype._maxListeners = 1000;


// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('users').del()
//     .then(function () {
//       // Inserts seed entries
//       // create an object that has all of the properties of the table you created
//       return knex('users').insert(fakeData);
//     });
// };

// run the seed
// knex seed:run


/*
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  //return knex('users').del()
  async function seedUser(outerLoop, innerLoop) {
      //knex('users').del()
      for(let i = 0; i < outerLoop; i++) {
        let arr = [];
        for(let j = 0; j < innerLoop; j++) {
          let userObject = {
            display_name: faker.internet.userName(),
            logo: faker.image.imageUrl(),
            profile_image_url: faker.internet.url(),
            category: faker.company.bsAdjective(),
            followers: faker.random.number(),
            Following: faker.random.number()
          }
          arr.push(userObject);
        }
        await knex('users').insert(arr);
      }
    }
    seedUser(1, 10);
    //seed(seedUser(1,2));
  };
*/


const seed = async function seedUser(outerLoop, innerLoop) {
  for(let i = 0; i < outerLoop; i++) {
    // need to insert an array of objects into the db
    let arr = [];
    for(let j = 0; j < innerLoop; j++) {
      let userObject = {
        // user_id: faker.random.number(),
        display_name: faker.internet.userName(),
        logo: faker.image.imageUrl(),
        profile_image_url: faker.internet.url(),
        category: faker.company.bsAdjective(),
        followers: faker.random.number(),
        Following: faker.random.number(),
      }
      arr.push(userObject);
    }
    await knex('users').insert(arr);
  }
}
seedUser(1, 10);

// seedUser(1000, 10000);

module.exports.seed = seed;
