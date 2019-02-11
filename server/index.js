const express = require('express');
const exphbs= require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const UserDb = require('../database/Users');


const app = express();

// database
const db = require('../database/knexfile');

// test db connection
// db.authenticate()
//   .then(() => console.log('connected to postgreSQL'))
//   .catch(err => console.log('ERROR ' + err))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

// GET ALL
app.get('/users', (req, res) => {
  UserDb.findAll({ limit : 100})
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ', err)
    })
})

// Find one
// app.get('/findone', (req, res) => {
//   UserDb.findById(req.params.id)
//   .then(user => {
//     res.json(user)
//   })
//   .catch(err => {
//     console.log("Error: ", err);
//   })
// })
app.get('/findone', (req, res) => {
  let id = req.body.user_id;
  UserDb.findOne({
    where: {
      user_id: id
    }
  })
  .then((user) => {
    res.send(user);
  })
  .catch((err) => {
    console.log('Error: ', err);
  })
})

// POST
app.post('/create', (req, res) => {
//create a user based on whats sent from the request body
 UserDb.create(req.body)
  .then(user => {
    res.send(user);
  })
  .catch(err => console.log('Error: ', err));
})

// UPDATE

// DELETE
app.delete('/delete', (req, res) => {
  let id = req.body.user_id
  UserDb.destroy({
    where: {
      user_id: id
    }
  })
  .then(console.log('Delete successufl'))
  .catch((err) => {
    console.log("Error: ", err)
  })
})



const port = process.env.PORT || 3001;
// const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});