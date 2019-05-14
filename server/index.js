// require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const knex = require('../database/knex');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));


// GET ALL
app.get('/users', (req, res) => {
  knex.raw('select * from Users order by followers desc limit 10')
  .then((users)=>{
    res.send(users.rows);
  })
  .catch((err) => {
    console.log('Error: ', err);
  })
})

// GET ONE
app.get('/oneuser', (req, res) => {
  knex.raw('select * from users where user_id = 1')
  .then((user) => {
    res.send(user.rows)
  })
  .catch((err) => {
    console.log('Error: ', err);
  })
})

// CREATE
// Create one user, creates a user with hard coded values for test usage
app.post('/create', (req, res) => {
  knex.raw('insert into users(display_name, logo, profile_image_url, category, followers, following) values(?, ?, ?, ?, ?, ?)', ['test', 'test', 'test', 'test', '1', '1'])
    .then(()=>{
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error: ', err);
  })
});

// UPDATE
app.put('/users/:user_id', (req, res) => {
  // update the table, set , concatanate the field you want to change (user_id) where the user_id = the value you enter (the params user_id)
  knex.raw('update users set ' + req.body.field + ' = ? where user_id = ?', [req.body.value, req.params.user_id])
  .then(() => {
    console.log('Update successful')
  })
  .catch((err) => {
    console.log('Error: ', err)
  })
});

// DELETE
app.delete('/menu-users/:user_id', (req, res) => {
  knex.raw('delete from users where user_id = ?', req.params.user_id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error: ', err)
    })
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});