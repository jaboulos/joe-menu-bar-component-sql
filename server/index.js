const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('../database');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));


app.get('/username', function (req, res) {
  // console.log('this is req.body!!!!! ======> ', req.body)
  database.connection.query('SELECT * FROM users', (error, results, fields) => {
    // console.log('connected to the database');
    if (error) {
      console.log('error')
    } else {
      console.log('these are results & fields', results, fields);
      res.json(results);
    }
  })
});





app.listen(port, () => console.log(`App listening on port ${port}!`))
