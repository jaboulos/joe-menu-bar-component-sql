const faker = require('faker');

// set this to en_US so faker generated data is in english
faker.locale = 'en_US';

// stack overflow recommendation, node property
require('events').EventEmitter.prototype._maxListeners = 1000;

const makeUser = () => ({
  display_name: faker.internet.userName(),
  logo: faker.image.imageUrl(),
  profile_image_url: faker.internet.url(),
  category: faker.company.bsAdjective(),
  followers: faker.random.number(),
  Following: faker.random.number(),
})

exports.seed = async function(knex, Promise) {
  const outerLoop = 1000;
  const innerLoop = 10000;
  for(let i = 0; i < outerLoop; i++) {
    const usersArr = [];
    for(let j = 0; j < innerLoop; j++) {
      usersArr.push(makeUser());
    }
    await knex('users')
      .insert(usersArr);
  }
};
