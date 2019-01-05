const express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/users', function (req, res) {
  console.log('getting username from client', req.body)
  res.status(201).send();
  // res.end();
});

app.get('/users', function (req, res) {
  console.log('this is req.body!!!!! ======> ', req.body)
  res.status(200).send();
});

let port = 3000;

// app.listen(port, function () {
//   console.log(`listening on port ${port}`);
// });

