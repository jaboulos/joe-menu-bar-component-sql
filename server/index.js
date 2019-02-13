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
/*
app.get('/users', (req, res) => {
  knex.findAll({ limit : 100})
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ', err)
    })
})
*/

app.get('/users', (req, res) => {
  // knex.raw('select * from users order by user_id asc limit 10')
  knex.raw('select * from users order by user_id asc limit 10')
  .then((users)=>{
    res.send(users);
  })
  .catch((err) => {
    console.log('Error: ', err);
  })
})

/*
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
*/

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});