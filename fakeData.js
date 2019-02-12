const faker = require('faker');

// set this to en_US so faker generated data is in english
faker.locale = 'en_US';

// stack overflow recommendation, node property
require('events').EventEmitter.prototype._maxListeners = 1000;


module.exports = [
  {
    display_name: faker.internet.userName(),
    logo: faker.image.imageUrl(),
    profile_image_url: faker.internet.url(),
    category: faker.company.bsAdjective(),
    followers: faker.random.number(),
    Following: faker.random.number(),
  }
];


