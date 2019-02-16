// const csvWriter = require('csv-write-stream');
// const fs = require('file-system');

const faker = require('faker');
faker.locale = 'en_US';

// stack overflow recommendation, node property
require('events').EventEmitter.prototype._maxListeners = 1000;


// this is the function that turns the object into csv

function fakeData() {
  // usersArr is the array that i want to turn into a csv
  const data = [];
  for(let i = 0; i < 10; i++) {
    const makeUser = () => ({
      user_id: i,
      display_name: faker.internet.userName(),
      logo: faker.image.imageUrl(),
      profile_image_url: faker.internet.url(),
      category: faker.company.bsAdjective(),
      followers: faker.random.number(),
      following: faker.random.number(),
    })
    const obj = makeUser()
    data.push(obj)

    // const csvData = objectToCsv(data)
  }
  // return data;

    // this is the function to turn the object into a csv
  const objectToCsv = function(data) {
    // final output should be a bunch of csv rows, newline separated rows
    const csvRows = [];
    // get the headers for the csv
    // headers of the json object will be the keys from one of them
      // get the keys from the first object in the array
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));
    // loop over the rows
    console.log(headers);

    // form escaped comma seperated values

  }
  objectToCsv(data);
};




fakeData();

