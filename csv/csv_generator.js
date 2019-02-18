const fs = require('fs');
const faker = require('faker');
faker.locale = 'en_US';

require('events').EventEmitter.prototype._maxListeners = 1000;

const final = function fakeData() {
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

final();

/*
"copy" command in postgres shell

COPY users(user_id,display_name,logo,profile_image_url,category,followers,following)
FROM '/Users/joeboulos/Documents/javascript/sdc-group/joe-menu-bar-component-sql/csv/1_2500000_data.csv' DELIMITER ',' CSV HEADER;

Node command to allocate more memory to generate the csv, call command in csv directory
node --max-old-space-size=4096 csv_generator.js
*/
