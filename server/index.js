const express = require('express');
const exphbs= require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const UserDb = require('../database/Users');


const app = express();

// database
const db = require('../database/index');

// test db connection
// db.authenticate()
//   .then(() => console.log('connected to postgreSQL'))
//   .catch(err => console.log('ERROR ' + err))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));


// app.get('/users', (req, res) => {
//   res.send('TESTING');
// });

app.get('/users', (req, res) => {
  UserDb.findAll({ limit : 100})
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ', err)
    })
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});