const fs = require('fs');
const faker = require('faker');
faker.locale = 'en_US';

require('events').EventEmitter.prototype._maxListeners = 1000;

const final = function fakeData() {
  const data = [];
  for(let i = 1; i < 2500001; i++) {
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
  }
  const objectToCsv = function(data) {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    //csvRows.push(headers.join(','));
    for(const row of data) {
      const values = headers.map(header => {
        const escaped = (''+row[header]).replace(/"/g, '\\"')
        return `"${escaped}"`
      })
      csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
  }
  fs.writeFileSync('1_2500000_data.csv', objectToCsv(data), 'utf8');
};

const final2 = function fakeData() {
  const data = [];
  for(let i = 2500001; i < 5000001; i++) {
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
  }
  const objectToCsv = function(data) {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    //csvRows.push(headers.join(','));
    for(const row of data) {
      const values = headers.map(header => {
        const escaped = (''+row[header]).replace(/"/g, '\\"')
        return `"${escaped}"`
      })
      csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
  }
  fs.writeFileSync('2500001_5000000_data.csv', objectToCsv(data), 'utf8');
};

const final3 = function fakeData() {
  const data = [];
  for(let i = 5000001; i < 7500001; i++) {
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
  }
  const objectToCsv = function(data) {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    //csvRows.push(headers.join(','));
    for(const row of data) {
      const values = headers.map(header => {
        const escaped = (''+row[header]).replace(/"/g, '\\"')
        return `"${escaped}"`
      })
      csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
  }
  fs.writeFileSync('5000001_7500000_data.csv', objectToCsv(data), 'utf8');
};

const final4 = function fakeData() {
  const data = [];
  for(let i = 7500001; i < 10000001; i++) {
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
  }
  const objectToCsv = function(data) {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    //csvRows.push(headers.join(','));
    for(const row of data) {
      const values = headers.map(header => {
        const escaped = (''+row[header]).replace(/"/g, '\\"')
        return `"${escaped}"`
      })
      csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
  }
  fs.writeFileSync('7500001_10000000_data.csv', objectToCsv(data), 'utf8');
};

final();
final2();
final3();
final4();

/*

***"copy" command in postgres shell***

COPY users(user_id,display_name,logo,profile_image_url,category,followers,following)
FROM '/Users/joeboulos/Documents/javascript/sdc-group/joe-menu-bar-component-sql/csv/1_2500000_data.csv' DELIMITER ',' CSV HEADER;

***Node command to allocate more memory to generate the csv, call command in csv directory***
node --max-old-space-size=4096 csv_generator.js

Notes: 1:27mins to create 4 csv files with a total of 10m records
       3:09mins to import 2,500,000 records into table
       12:36mins to import 10,000,000 records into table
       14:03mins to generate 10m records and import 10m recrods into ec2 db

*/
