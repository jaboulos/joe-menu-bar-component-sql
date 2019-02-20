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
// knex raw method
app.get('/users', (req, res) => {
  // knex.raw('select * from users order by user_id asc limit 10')
  knex.raw('select * from users order by user_id desc limit 10')
  .then((users)=>{
    res.send(users.rows);
  })
  .catch((err) => {
    console.log('Error: ', err);
  })
})

// shortcut method
// app.get('/users', (req, res) => {
//   knex.select().from('users')
//     .limit(10)
//     .then((user)=>{
//       res.send(user)
//     })
//     .catch((err) => {
//       console.log('Error: ', err);
//     })
// })


// GET ONE
app.get('/oneuser', (req, res) => {
  knex.raw('select * from users where user_id = 1000003')
  .then((user) => {
    res.send(user.rows)
  })
  .catch((err) => {
    console.log('Error: ', err);
  })
})

// shortcut method
// has a bug, returns all instead of 1
// app.get('/oneuser/:user_id', (req, res) => {
//   knex.select()
//     .from('users')
//     .where('user_id', req.params.user_id)
//     .then((user) => {
//       res.send(user)
//     })
//     .catch((err) => {
//       console.log('Error: ', err)
//     })
//   })

// CREATE
// Create one user, creates a user with hard coded values for test usage
// app.post('/create', (req, res) => {
//   knex.raw('insert into users(display_name, logo, profile_image_url, category, followers, following) values(?, ?, ?, ?, ?, ?)', ['test', 'test', 'test', 'test', '1', '1'])
//   // .then(() => {
//     // knex.raw('select * from users order by user_id desc limit 1')
//     .then(()=>{
//       res.sendStatus(201);
//     })
//     .catch((err) => {
//       console.log('Error: ', err);
//     // })
//   })
// });

// shortcut method
// create users dynamically
app.post('/create', (req, res) => {
  knex('users').insert({
    display_name: req.body.display_name,
    logo: req.body.logo,
    profile_image_url: req.body.profile_image_url,
    category: req.body.category,
    followers: req.body.followers,
    following: req.body.following
  })
  .then(() => {
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log('Error: ', err);
  })
  // .then(() => {
  //   knex.raw('select * from users order by user_id desc limit 1')
  //   .then((users)=>{
  //     res.send(users.rows);
  //   })
  //   .catch((err) => {
  //     console.log('Error: ', err);
  //   })
  // })
});


// UPDATE
// works, but working out on having it send json of the updated user correctly
app.put('/users/:user_id', (req, res) => {
  // go to users table where user_id is equal to req.params.user_id...just updating display_name for test purposes
  knex('users').where('user_id', req.params.user_id).update({
    display_name: req.body.display_name
  })
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('Error: ', err)
  })
});

// app.put('/users/:user_id', (req, res) => {
//   // update the table, set , concatanate the field you want to change (user_id) where the user_id = the value you enter (the params user_id)
//   knex.raw('update users set ' + req.body.field + ' = ? where user_id = ?', [req.body.value, req.params.user_id])
//   .then(() => {
//     console.log('Update successful')
//   })
//   .catch((err) => {
//     console.log('Error: ', err)
//   })
// });


// DELETE
//knex raw
app.delete('/users/:user_id', (req, res) => {
  knex.raw('delete from users where user_id = ?', req.params.user_id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error: ', err)
    })
})

//shortcut
// app.delete('/users/:user_id', (req, res) => {
//   //select users table, where user_id is equal to params.user_id
//   knex('users').where('user_id', req.params.user_id).del()
//     .then(() => {
//       console.log('deleted user')
//     })
//     .catch((err) => {
//       console.log('Error: ', err)
//     })
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});