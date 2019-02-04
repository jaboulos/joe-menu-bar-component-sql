// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const database = require('../database');
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(express.static(__dirname + '/../client/dist'));


// app.get('/username', function (req, res) {
//   // console.log('this is req.body!!!!! ======> ', req.body)
//   database.connection.query('SELECT * FROM users', (error, results, fields) => {
//     // console.log('connected to the database');
//     if (error) {
//       console.log('error')
//     } else {
//       console.log('these are results & fields', results, fields);
//       res.json(results);
//     }
//   })
// });

// app.listen(port, () => console.log(`App listening on port ${port}!`))


const express = require('express');
const exphbs= require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
// const UserDb = require('../database/Users');


const app = express();


const Sequelize = require('sequelize');
const db = new Sequelize('sdc-menu-bar-component', 'joeboulos', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

  // test db connection
  db.authenticate()
    .then(() => console.log('connected to postgreSQL'))
    .catch(err => console.log('ERROR ' + err))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.static(__dirname + '/../client/dist'));


app.get('/users', (req, res) => {
  res.send('TESTING');
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});