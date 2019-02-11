const UserDb = require('../database/Users');
const faker = require('faker');

// set this to en_US so faker generated data is in english
faker.locale = 'en_US';

// stack overflow recommendation, node property
require('events').EventEmitter.prototype._maxListeners = 1000;
let count = 1;

// use async and await to load large numbers of data into db
// if you try to dont use the async function it'll timeout, create the fake data first, wait till thats finished
  // then enter it into the db.  Node seems to have a max amount of 1000 entries
// use 'insertMany()' method instead of 'create' for faster load times

async function seedUser(outerLoop, innerLoop) {
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
    console.log('Seed successful', count++);
    await UserDb.bulkCreate(arr);
  }
}

seedUser(1000, 10000);
// seedUser(1, 10);