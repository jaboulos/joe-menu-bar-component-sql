const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users'
});

connection.connect(function(err) {
  if(err) {
    return console.error('error ' + err.message);
  }

  console.log('Connected to the MySQL server. ')
});


module.exports.connection = connection;