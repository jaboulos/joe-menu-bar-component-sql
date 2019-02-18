// WORKING VERSION
// node --max-old-space-size=4096 somescript.js
const fs = require('fs');
const faker = require('faker');
faker.locale = 'en_US';

require('events').EventEmitter.prototype._maxListeners = 1000;

const final = function fakeData() {
  // usersArr is the array that i want to turn into a csv
  const data = [];
  for(let i = 0; i < 25; i++) {
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
  }
  // this is the function to turn the object into a csv
  const objectToCsv = function(data) {
    // final output should be a bunch of csv rows, newline separated rows
    const csvRows = [];
    // get the headers for the csv
    // headers of the json object will be the keys from one of them
      // get the keys from the first object in the array
    const headers = Object.keys(data[0]);
    //csvRows.push(headers.join(','));
    // loop over the rows
    for(const row of data) {
      // need to map over the headers and make sure theyre in the same order every time
      // the value of const values should be the 7 values for each row
      const values = headers.map(header => {
        // need to escape quotes, need to coerce value into a string in case you have numbers, cant use .replace on numbers
        const escaped = (''+row[header]).replace(/"/g, '\\"')
        // row[header] is the first header
        // need to wrap each escaped value in a quote
        return `"${escaped}"`
      })
      // now push these values into the csvRows array, join by comma
      csvRows.push(values.join(','));
    }
    // join everything by newline, cant have an array in a csv
    return csvRows.join('\n');
  }
  //console.log(objectToCsv(data));
  fs.writeFileSync('1_2500000_data.csv', objectToCsv(data), 'utf8');
};

final();



// copy command in postgres shell
/*
COPY users(user_id,display_name,logo,profile_image_url,category,followers,following)
FROM '/Users/joeboulos/Documents/javascript/sdc-group/joe-menu-bar-component-sql/csv/1_2500000_data.csv' DELIMITER ',' CSV HEADER;

*/