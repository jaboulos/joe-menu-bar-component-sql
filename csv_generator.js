// const csvWriter = require('csv-write-stream');
// const fs = require('file-system');

const faker = require('faker');
faker.locale = 'en_US';

// stack overflow recommendation, node property
require('events').EventEmitter.prototype._maxListeners = 1000;

function fakeData() {
  // usersArr is the array that i want to turn into a csv
  const data = [];
  for(let i = 0; i < 10; i++) {
    const makeUser = () => ({
      user_id: i+1,
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
    // console.log(headers);
    // loop over the rows
    for(const row of data) {
      // need to map over the headers and make sure theyre in the same order every time
      // the value of const values should be the 7 values for each row
      const values = headers.map(header => {
        // need to escape quotes
        // need to coerce value into a string in case you have numbers, cant use .replace on numbers
        const escaped = (''+row[header]).replace(/"/g, '\\"')
        // row[header] is the first header
        // need to wrap each escaped value in a quote
        return `"${escaped}"`
        //return `"${row[header]}"`
      })
      // console.log(values.join(','));
      // now push these values into the csvRows array, join by comma
      csvRows.push(values.join(','));
    }
    // join everything by newline, cant have an array in a csv
    return csvRows.join('\n');
  }
  const csvData = objectToCsv(data);
  console.log(csvData);
};




fakeData();

